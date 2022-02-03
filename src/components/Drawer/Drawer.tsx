import React from 'react';
import styled from 'styled-components';
import { getPaddingFromIndent } from './utils';

type Margin = number | [number, number] | [number, number, number, number];

interface DrawerProps {
  columns?: number | number[];
  rows?: number | string;
  margin?: Margin;
}

const Drawer = ({
  columns = 1,
  rows = 'auto',
  margin = 5
}: DrawerProps) => {
  return (
    <DrawerWrapper
      $columns={columns}
      $rows={rows}
    >
      <DrawerContent $margin={margin} />
    </DrawerWrapper>
  );
}

const DrawerContent = styled.div<{
  $margin: Margin
}>`
  flex: 1;
  background: #e6e6e6;
  margin: ${({ $margin }) => {
    if (Array.isArray($margin)) {
      return $margin.map(n => getPaddingFromIndent(n) + '%').join(' ')
    }
    return `${getPaddingFromIndent($margin)}%`
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
