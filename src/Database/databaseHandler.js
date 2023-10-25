import * as db from "./database";
import { useBetween } from "use-between";
import useDatabases from "../hooks/databaseHook";




async function createTables() {
  try{
 await db.queryCreateTableAddress();

  await db.queryCreateTableRoute();

  await db.queryCreateDrivenRoute()
}catch(e){
  console.log(e)
  alert(e)
}
}

async function insertTestData() {
  await db.insertTestAddress();

  await db.insertTestRoutes()
  let addresses;
  do{
addresses = db.getAllAddress
  }while(!addresses)

}

function persistNewAddress(address) {
  db.insertAddress(address);
}

function saveRouteByDay(){

}



function getAddressList() {
  return new Promise(async (resolve, reject) => {
    let list = await db.getAllAddress();

    resolve(list);
  }).then(async (res) => {

    return await res;
  });
}

export { createTables, insertTestData, persistNewAddress, getAddressList };
