import React, {Text, View} from 'react-native';
import AddressInputFields from '../AddressInputFields/AddressInputFields';
import ButtonIcon from '../../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {styles} from './CreateAddress.styles';
import useCreateAddress from '../../../../../stores/createAddressStore';

export default function CreateAddress() {
  const {handelOnClickBackBtn, handelOnClickSaveBtn} = useCreateAddress();
  return (
    <View style={styles.dialog}>
      <Text style={styles.headline}>Neue Adresse</Text>
      <View style={styles.gridStyle}>
        <View style={styles.row1}>
          <View style={styles.col1}>
            <AddressInputFields />
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
