import useEditRouteModal from "./editRouteStore"

export default function useEditRouteDistance (){
    const {editRoute} = useEditRouteModal();
    const [oldDistance] = useState(editRoute.distance);
    
    const [correctionOfDistans, setCorrectionOfDistans] = useState(false);
}