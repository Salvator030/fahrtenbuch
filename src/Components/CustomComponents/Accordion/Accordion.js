import {useState} from 'react';
import React, {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Accordion.sytles';

export default function Accordion({title, items, children}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity ref={this} style={styles.row} onPress={toggleExpand}>
        <Text style={[styles.title, styles.font]}>{title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && <View>{children}</View>}
    </View>
  );
}
