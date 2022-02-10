import React, { useRef } from 'react';
import styled from 'styled-components';
import editorSettins, { Paddings } from '../../store/editorSettins';
import { observer } from 'mobx-react-lite';
import userData from '../../store/userData';
import { getPaddingFromIndent } from './utils';
import ReactToPrint from "react-to-print";
import Classic from '../../templates/classic/Classic';

interface DrawerProps {
  columns?: number | number[];
  rows?: number | string;
  paddings?: Paddings;
}

const Drawer = observer(({
  columns = 1,
  rows = 'auto'
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null)
  const reactToPrintContent = React.useCallback(() => {
    return drawerRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerRef.current]);
  return (
    <>
      <ReactToPrint content={reactToPrintContent} />
      <DrawerWrapper
        ref={drawerRef}
        $columns={columns}
        $rows={rows}
      >
        <DrawerContent $paddings={editorSettins.paddings}>
          <Classic data={userData.summary} />
        </DrawerContent>
      </DrawerWrapper>
    </>
  );
})

const DrawerContent = styled.div<{
  $paddings: Paddings
}>`
  /* background: #F5F5F5; */
  margin: ${({ $paddings }) => {
    const paddings = [$paddings.top, $paddings.right, $paddings.bottom, $paddings.left]
    return paddings.map(value => getPaddingFromIndent(value) + '%').join(' ')
  }};
  overflow: hidden;
  height: ${({ $paddings }) => {
    return `calc(100% - ${$paddings.top} - ${$paddings.bottom})`
  }};
`

const DrawerWrapper = styled.div<{
  $columns: number | number[],
  $rows: number | string
}>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $columns }) => {
    if (Array.isArray($columns)) {
      return $columns.map(n => `${n}fr`).join(' ')
    }
    return `repeat(${$columns}, 1fr)`
  }};
  grid-template-rows: ${({ $rows }) => $rows};
  height: 100%;
  aspect-ratio: 210 / 297;
  background-color: #fff;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
`;

export default Drawer;
