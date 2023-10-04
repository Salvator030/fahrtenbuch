// import React, { useState, useEffect } from "react";
// import { getAddressList } from "./databaseHandler";

// export function useDatabaseHook() {
//   const [addressList, setAddressList] = useState(null);

//   function promise() {
//     return new Promise((resolve, reject) => {
//       let list = getAddressList();
//       console.log(list.constructor === Array);

//       resolve(list);
//     });
//   }

//   async function fetch() {
//     let temp = await promise();
//     console.log(temp);
//     setAddressList(temp);
//     console.log(addressList);
//   }
//   fetch();
// }
