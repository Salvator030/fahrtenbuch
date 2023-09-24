import {insertAddress, getAllAddress} from './database';

function persistNewAddress(address){
        insertAddress(address);
}

 async function getAddressList(){
       return await getAllAddress()}

export {persistNewAddress, getAddressList}