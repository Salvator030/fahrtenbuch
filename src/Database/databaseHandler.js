import * as db from "./database";

async function createTables() {
  function p() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(db.queryCreateTableAddress());
      }, 100);
    });
  }

  await p().then((res) => {
    console.log(res);
    return res;
  });
}

async function insertTestData() {
  function p() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(db.insertTestAddress());
      }, 100);
    });
  }

  await p().then((res) => {
    console.log(res);
    return res;
  });
}

function persistNewAddress(address) {
  db.insertAddress(address);
}

// async function setTables() {
//   function p() {
//     return new Promise((resolve) => {
//       setTimeout(async () => {
//         resolve( db.createTables());
//       }, 100);
//     });
//   }

//   const list = await p().then((res) => {
//     console.log(res);
//      return  res;})

// }

function getAddressList() {
  return new Promise(async (resolve, reject) => {
    let list = await db.getAllAddress();
    console.log(list);
    resolve(list);
  }).then(async (res) => {
    console.log(res);
    return await res;
  });
}

export { createTables, insertTestData, persistNewAddress, getAddressList };
