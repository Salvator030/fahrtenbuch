import React from 'react';
import {View} from 'react-native';

const Col = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

const Row = ({children, style}) => <View style={style}>{children}</View>;
export default function Grid({gridStyle, rowsAndCols}) {
  // const Container = ({children, style}) => (
  //   <View style={style}>{children}</View>
  // );

  const items = rowsAndCols.map((row, i) => {
    const col = row.cols.map((col, i) => (
      <Col style={col.style} key={'col' + i}>
        {col.item}
      </Col>
    ));
    return <Row style={row.style}>{col}</Row>;
  });

  return (
    <View style={{margin: 8}}>
      <View style={gridStyle ? gridStyle : null}>{items}</View>
    </View>
  );
}
