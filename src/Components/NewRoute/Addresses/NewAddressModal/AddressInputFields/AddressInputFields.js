import React, {View, TextInput} from 'react-native';
import useAddressInputFields from '../../../../../stores/addressInputFieldsStore';
import {useBetween} from 'use-between';
import {styles} from './AddressInputFields.styles';

export default function AddressInputFields() {
  const useShareAddressInputFields = () => useBetween(useAddressInputFields);
  const {
    nameValue,
    setNameValue,
    nameError,
    streetValue,
    setStreetValue,
    streetError,
    hnrValue,
    setHnrValue,
    hnrError,
    plzValue,
    setPlzValue,
    plzError,
    placeValue,
    setPlaceValue,
    placeError,
    infoValue,
    infoError,
    setInfoValue,
    checkNameInput,
    checkStreetInput,
    checkHnrInput,
    checkPlzInput,
    checkPlaceInput,
    checkInfoInput,
  } = useShareAddressInputFields();

  return (
    <View style={styles.gridStyle}>
      <View style={styles.row}>
        <View style={styles.col1}>
          <TextInput
            placeholder={!nameError ? 'Name' : nameError}
            placeholderTextColor={!nameError ? 'gray' : 'red'}
            value={nameValue}
            onChangeText={setNameValue}
            onEndEditing={checkNameInput}
            style={styles.text}
          />
        </View>
      </View>
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
      <View style={styles.row}>
        <View style={styles.col2}>
          <TextInput
            multiline
            placeholder={infoError ? 'Info' : infoError}
            placeholderTextColor={!infoError ? 'gray' : 'red'}
            value={infoValue}
            onChangeText={setInfoValue}
            onEndEditing={checkInfoInput}
            style={styles.infoText}
          />
        </View>
      </View>
    </View>
  );
}
