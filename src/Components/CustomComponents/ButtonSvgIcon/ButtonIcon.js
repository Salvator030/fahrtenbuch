import React, {TouchableOpacity, Text, View} from 'react-native';

export default function ButtonIcon({
  btnStyle,
  onClick,
  txtStyle,
  title,
  Icon,
  iconName,
  size,
  color,
}) {
  console.log(title);
  return (
    <View style={btnStyle ? btnStyle : {height: size, width: size}}>
      <TouchableOpacity onPress={onClick}>
        <Text style={title ? txtStyle : {height: 0}}>{title}</Text>
        <Icon
          name={iconName}
          size={size ? size : 30}
          color={color ? color : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
}
