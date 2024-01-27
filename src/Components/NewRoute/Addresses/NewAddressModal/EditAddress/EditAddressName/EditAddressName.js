import React, {Text, TextInput, View} from 'react-native';
import ButtonIcon from '../../../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useEditAddressName from '../../../../../../stores/editAddressNameStore';
import {styles} from './EditAddressName.styles';
export default function EditAddressName({addressName}) {
  const {
    inputName,
    setInputName,
    nameError,
    checkNameInput,
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
  } = useEditAddressName(addressName);
  return (
    <View style={styles.dialog}>
      <Text style={styles.headline}>Umbenennen</Text>
      <View style={styles.gridStyle}>
        <View style={styles.row1}>
          <View style={styles.col1}>
            <TextInput
              placeholder={!nameError ? 'Name' : nameError}
              placeholderTextColor={!nameError ? 'gray' : 'red'}
              value={inputName}
              onChangeText={setInputName}
              // onEndEditing={checkNameInput}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.col1}>
            <ButtonIcon
              Icon={Icon}
              title="zurück"
              iconName="arrow-back"
              onClick={handelOnClickBackBtn}
            />
          </View>
          <View style={styles.col2}>
            <ButtonIcon
              Icon={Icon2}
              title="ok"
              iconName="check"
              onClick={handelOnClickSaveBtn}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
