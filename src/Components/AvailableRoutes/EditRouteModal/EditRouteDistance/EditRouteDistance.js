import { Text, TextInput } from "react-native";
import useEditRouteDistance from "../../../../stores/editRouteDistanceStore";

export default function EditRouteDistance(){

    const {oldDistance} = useEditRouteDistance();
    return(<View>
        <Text>Entfernung andern</Text>
        <TextInput value={oldDistance}/>
    </View>);
}