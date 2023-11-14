import React from 'react';
import {View} from 'react-native';

const Container = ({children, style}) => <View style={style}>{children}</View>;
const Col = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

const Row = ({children, style}) => <View style={style}>{children}</View>;
export default function Grid({gridStyle, rowsAndCols}) {
  const items = rowsAndCols.map((row, i) => {
    const col = row.cols.map((col, i) => (
      <Col style={col.style}>{col.item}</Col>
    ));
    return <Row style={row.style}>{col}</Row>;
  });

  return <View style={gridStyle}>{items}</View>;
}
