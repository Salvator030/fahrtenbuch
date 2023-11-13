import {useEffect, useState} from 'react';
import React, {TouchableOpacity, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Accordion({title, items}) {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(items.map((item, i) => <View key={i}>{item}</View>));
  }, [items]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity ref={this} style={styles.row} onPress={toggleExpand}>
        <Text style={[styles.title, styles.font]}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && <View>{data}</View>}
    </View>
  );
}

const styles = {
  root: {alignSelf: 'center', marginTop: 8, marginHorizontal: 8, width: 800},
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkgray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  parentHr: {
    height: 1,
    color: 'white',
    width: '100%',
  },
  child: {
    backgroundColor: 'lightgray',
    padding: 16,
  },
};
