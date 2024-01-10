import React, {TouchableWithoutFeedback, Text, View} from 'react-native';

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
        btnStyle
          ? btnStyle
          : size
          ? {height: size, width: size}
          : {
              height: defaultSize,
              width: defaultSize,
              marginTop: 8,
              marginBottom: 16,
            }
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
          <Text style={title ? txtStyle : {height: 0}}>{title}</Text>
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
