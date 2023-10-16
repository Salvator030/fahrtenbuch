import * as db from "./database";
import { useBetween } from "use-between";
import useDatabases from "../hooks/databaseHook";




async function createTables() {
 await db.queryCreateTableAddress();
setTimeout(4000);
  await db.queryCreateTableRoute();
  setTimeout(4000);
  await db.queryCreateDrivenRoute()
  setTimeout(4000);
}

async function insertTestData() {
  await db.insertTestAddress();
  await db.insertTestRoutes()
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
