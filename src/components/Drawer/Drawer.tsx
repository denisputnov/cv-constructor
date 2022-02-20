import React from 'react';
import styled from 'styled-components';
import editorSettins, { Paddings } from '../../store/editorSettins';
import { observer } from 'mobx-react-lite';
import userData from '../../store/userData';
import { getPaddingFromIndent } from './utils';
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
  return (
    <DrawerWrapper 
      id='print-area'
      $columns={columns}
      $rows={rows}
    >
      <DrawerContent $paddings={editorSettins.paddings} $fontSize={editorSettins.customFontSize}>
        <Classic data={userData.summary} />
      </DrawerContent>
    </DrawerWrapper>
  );
})

const DrawerContent = styled.div<{
  $paddings: Paddings
  $fontSize?: string 
}>`
  font-size: ${({ $fontSize }) => $fontSize ? $fontSize + 'px' : 'calc(12px + 2 * ((100vw - 1280px) / (1920 - 1280)))'};
  margin: ${({ $paddings }) => {
    const paddings = [$paddings.top, $paddings.right, $paddings.bottom, $paddings.left]
    return paddings.map(value => getPaddingFromIndent(value) + '%').join(' ')
  }};
  overflow: hidden;
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
