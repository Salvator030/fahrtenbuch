import React, {Text, TextInput, View} from 'react-native';
import ButtonIcon from '../../../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useEditAddressName from '../../../../../../stores/editAddressNameStore';
import {styles} from './EditAddressPostal.styles';
import useEditAddressPostal from '../../../../../../stores/editAddressPostal';
export default function EditAddressName({addressName}) {
  const {
    streetValue,
    setStreetValue,
    streetError,
    checkStreetInput,
    hnrValue,
    setHnrValue,
    hnrError,
    checkHnrInput,
    plzValue,
    setPlzValue,
    plzError,
    checkPlzInput,
    placeValue,
    setPlaceValue,
    placeError,
    checkPlaceInput,
    handelOnClickBackBtn,
  } = useEditAddressPostal();
  return (
    <View style={styles.dialog}>
      <Text style={styles.headline}>Umbenennen</Text>
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col4}>
            <TextInput
              placeholder={!streetError ? 'Straße' : streetError}
              placeholderTextColor={!streetError ? 'gray' : 'red'}
              value={streetValue}
              onChangeText={setStreetValue}
              onEndEditing={checkStreetInput}
              style={styles.text}
            />
          </View>
          <View style={styles.col3}>
            <TextInput
              placeholder={!hnrError ? 'Hnr' : hnrError}
              placeholderTextColor={!hnrError ? 'gray' : 'red'}
              value={hnrValue}
              onChangeText={setHnrValue}
              onEndEditing={checkHnrInput}
              style={styles.text}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col3}>
            <TextInput
              placeholder={!plzError ? 'PLZ' : plzError}
              placeholderTextColor={!plzError ? 'gray' : 'red'}
              value={plzValue}
              onChangeText={setPlzValue}
              onEndEditing={checkPlzInput}
              style={styles.text}
            />
          </View>
          <View style={styles.col2}>
            <TextInput
              placeholder={!placeError ? 'Ort' : placeError}
              placeholderTextColor={!placeError ? 'gray' : 'red'}
              value={placeValue}
              onChangeText={setPlaceValue}
              onEndEditing={checkPlaceInput}
              style={styles.text}
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
              //   onClick={handelOnClickSaveBtn}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
