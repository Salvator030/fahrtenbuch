import * as db from "./database";

async function createTables() {
 await db.queryCreateTableAddress();

  await db.queryCreateTableRoute();

  await db.queryCreateDrivenRoute()

}

async function insertTestData() {
  await db.insertTestAddress();
  await db.insertTestRoutes()
}

function persistNewAddress(address) {
  db.insertAddress(address);
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
