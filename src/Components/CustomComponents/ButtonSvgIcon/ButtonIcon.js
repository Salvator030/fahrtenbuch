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
  return (
    <View style={btnStyle ? btnStyle : {height: size, width: size}}>
      <TouchableWithoutFeedback
        onPress={onClick}
        disabled={disabled ? disabled : false}>
        <View>
          <Text style={title ? txtStyle : {height: 0}}>{title}</Text>
          <Icon
            name={iconName}
            size={size ? size : 30}
            color={color ? color : 'black'}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
