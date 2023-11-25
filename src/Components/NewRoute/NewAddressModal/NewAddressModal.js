import {Button, Modal, View, StyleSheet, Text, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useBetween} from 'use-between';
import useNewAddressModal from '../../../stores/newAddresModalStore';

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
    // nameRef,
    streetValue,
    setStreetValue,
    // streetRef,
    hnrValue,
    setHnrValue,
    // hnrRef,
    plzValue,
    setPlzValue,
    // plzRef,
    placeValue,
    setPlaceValue,
    // placeRef,
    infoValue,
    setInfoValue,
    handelOnClickBackBtn,
    // handelOnClickSaveBtn,
  } = useShareNewAddressModal();

  const [checkList] = useState([true]);
  const [error, setError] = useState('');
  const nameRef = useRef();
  const streetRef = useRef();
  const hnrRef = useRef(null);
  const plzRef = useRef(null);
  const placeRef = useRef(null);

  function checkNameInput() {
    console.log(nameRef);
    const v = /^[\w\säüöß.,-]+$/;
    console.log(v.test(nameValue));
    let e;
    if (nameValue && !v.test(nameValue)) {
      setError(nameValue);
      setNameValue('');
      checkList[0] = false;
    } else {
      setError('');
      checkList[0] = true;
    }

    console.log(checkList);
    // for (let i = 0; i < 5; i++) {
    //
    //   if (refs[i].current.value === '') {
    //     checks[i] = false;
    //     refs[i].current.element.style.borderColor = 'red';
    //   } else {
    //     checks[i] = true;
    //     refs[i].current.style.borderColor = 'black';
    //   }
    // }

    // if (plzRef.current.element.value === '') {
    //   checks[4] = false;
    //   plzRef.current.element.style.borderColor = 'red';
    // } else {
    //   checks[4] = true;
    //   plzRef.current.element.style.borderColor = 'black';
    // }
  }

  const handelOnClickSaveBtn = () => {
    console.log(nameRef._root);
  };

  return (
    <View style={styles.root}>
      <View style={styles.dialog}>
        <Text style={styles.headline}>Neue Addresse</Text>
        <View style={styles.gridStyle}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <TextInput
                ref={nameRef}
                placeholder={checkList[0] ? 'Name' : error}
                placeholderTextColor={checkList[0] ? 'black' : 'red'}
                value={nameValue}
                onChangeText={setNameValue}
                style={
                  checkList[0]
                    ? [styles.text, styles.textColorBlack]
                    : [styles.text, styles.textColorRed]
                }
                onEndEditing={checkNameInput}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col4}>
              <TextInput
                placeholder="Straße"
                value={streetValue}
                onChangeText={setStreetValue}
                ref={streetRef}
                style={styles.text}
              />
            </View>
            <View style={styles.col3}>
              <TextInput
                placeholder="Hnr"
                value={hnrValue}
                onChangeText={setHnrValue}
                ref={hnrRef}
                style={styles.text}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col3}>
              <TextInput
                placeholder="PLZ"
                value={plzValue}
                onChangeText={setPlzValue}
                ref={plzRef}
                style={styles.text}
              />
            </View>
            <View style={styles.col2}>
              <TextInput
                placeholder="Ort"
                value={placeValue}
                onChangeText={setPlaceValue}
                ref={placeRef}
                style={styles.text}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col2}>
              <TextInput
                multiline
                placeholder="Info"
                value={infoValue}
                onChangeText={setInfoValue}
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
