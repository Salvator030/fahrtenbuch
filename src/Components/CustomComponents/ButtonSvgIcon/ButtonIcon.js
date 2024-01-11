import React, {TouchableWithoutFeedback, Text, View} from 'react-native';
import {styles} from './ButtonIcon.styles';
export default function ButtonIcon({
  btnStyle,
  onClick,
  txtStyle,
  title,
  Icon,
  iconName,
  size,
  color,
  disabled,
}) {
  const defaultSize = 30;
  return (
    <View
      style={
        btnStyle ? btnStyle : size ? {height: size, width: size} : styles.root
      }>
      <TouchableWithoutFeedback
        onPress={onClick}
        disabled={disabled ? disabled : false}
        style={{height: defaultSize, width: defaultSize}}>
        <View
          style={
            size
              ? {height: size, width: size}
              : {height: defaultSize, width: defaultSize}
          }>
          <Text style={title ? txtStyle : styles.text}>{title}</Text>
          <Icon
            name={iconName}
            size={size ? size : defaultSize}
            color={color ? color : 'black'}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
