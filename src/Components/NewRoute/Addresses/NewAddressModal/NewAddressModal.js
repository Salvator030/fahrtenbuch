import {Button, Modal, View, StyleSheet, Text, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import ButtonIcon from '../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../../../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useBetween} from 'use-between';
import useNewAddressModal from '../../../../stores/newAddresModalStore';

const styles = {
  root: {
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
    height: 900,
    width: 800,
  },
  dialog: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    height: 400,
    width: 300,
  },
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col: {flex: 1, marginHorizontal: 'auto'},
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 9, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},
  col4: {flex: 8, marginHorizontal: 'auto'},
  headline: {marginBottom: 8, fontSize: 18, fontWeight: 'bold'},
  infoText: {height: 150},
  text: {height: 32},
  textColorBlack: {color: 'black'},
  textColorRed: {color: 'red'},
};

export default function NewAddressModal() {
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
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
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
    checkNameInput,
    checkStreetInput,
    checkHnrInput,
    checkPlzInput,
    checkPlaceInput,
    checkInfoInput,

    // handelOnClickSaveBtn,
  } = useShareNewAddressModal();

  return (
    <View style={styles.root}>
      <View style={styles.dialog}>
        <Text style={styles.headline}>Neue Addresse</Text>
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
          <View style={styles.row}>
            <View style={styles.col1}>
              <ButtonIcon
                Icon={Icon}
                title="zurück"
                iconName="arrow-back"
                onClick={handelOnClickBackBtn}
              />
            </View>
            <View style={styles.col1}>
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
    </View>
  );
}
