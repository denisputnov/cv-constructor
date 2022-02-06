import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import editorSettins, { Paddings } from '../../store/editorSettins';
import userData from '../../store/userData';
import { getPaddingFromIndent } from './utils';

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
      $columns={columns}
      $rows={rows}
    >
      <DrawerContent $paddings={editorSettins.paddings}>
        {JSON.stringify(userData.global)}
        {JSON.stringify(userData.language)}
        <img src={userData.image ?? ""} alt="" />
      </DrawerContent>
    </DrawerWrapper>
  );
})

const DrawerContent = styled.div<{
  $paddings: Paddings
}>`
  flex: 1;
  background: #e6e6e6;
  margin: ${({ $paddings }) => {
    const paddings = [$paddings.top, $paddings.right, $paddings.bottom, $paddings.left]
    return paddings.map(value => getPaddingFromIndent(value) + '%').join(' ')
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
