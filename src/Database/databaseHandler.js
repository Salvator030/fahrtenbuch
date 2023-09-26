import { insertAddress, getAllAddress, createTables } from "./database";

function persistNewAddress(address) {
  insertAddress(address);
}

async function setTables() {
  function p() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve( createTables());
      }, 100);
    });
  }

  const list = await p().then((res) => {
    console.log(res);
     return  res;})
   
 
    // console.log(list)
    // return list

  //   const l =  Promise.all(list)
  //   console.log(l)
    
}


async function getAddressList() {
  function p() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve( getAllAddress());
      }, 100);
    });
  }

  const list = await p().then((res) => {
    console.log(res);
     return  res;})
   
 
    console.log(list)
    return list

  //   const l =  Promise.all(list)
  //   console.log(l)
    
}

export { persistNewAddress, getAddressList, setTables };
