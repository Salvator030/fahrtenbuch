import React, {View, Text, Button} from 'react-native-windows';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './EditRouteModal.styles';
import { useBetween } from 'use-between';
import useEditRouteModal from '../../../stores/editRouteStore';

export default function EditRouteModal () {

    const useShareEditRoute = () => useBetween(useEditRouteModal);
    const {toggleEditRouteModalVisible, editRouteModalDiscription } = useShareEditRoute();
    return (
        <View style={styles.dialog}>
          <Text style={styles.headline}>Bearbeiten</Text>
          <View style={styles.btn1}>
            <Button title='Rute Korrigieren'  />
          </View>
          <View style={styles.btn2}>
            <Button title='Entfernung ändern'  />
          </View>
        
          <ButtonIcon
            Icon={Icon}
            title='zurück'
            iconName='arrow-back'
            onClick={toggleEditRouteModalVisible}
          />
        </View>
    )
}