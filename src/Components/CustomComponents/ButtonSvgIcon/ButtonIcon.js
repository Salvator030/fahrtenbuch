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
  return (
    <View style={btnStyle}>
      <TouchableOpacity ref={this} onPress={onClick}>
        <Text style={txtStyle}>{title ? title : null}</Text>
        <Icon
          name={iconName}
          size={size ? size : 30}
          color={color ? color : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
}
