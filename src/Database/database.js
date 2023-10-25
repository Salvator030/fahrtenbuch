var sqlite = require("sqlite-sync"); //requirin
sqlite.connect("../  test.db");

export function queryCreateTableAddress() {
  sqlite.run(
    `CREATE TABLE IF NOT EXISTS address_tbl ( 
    add_id INTEGER NOT NULL , 
    name VARCHAR(100) NOT NULL UNIQUE,
    street VARCHAR(100) NOT NULL,
    hnr varchar(5) NOt NULL,
    plz varchar(5) NOT NULL,
    place varchar(50) NOT NULL,
    info varchar(255),
    hide BOOLEAN,
    PRIMARY KEY(add_id)
);`,

    function (res) {
      console.log(res);
    }
  );
}

export function queryCreateTableRoute() {
  sqlite.run(
    `
CREATE TABLE IF NOT EXISTS route_tbl (
  route_id INTEGER NOT NULL,
  startAdd_id INTEGER NOT NULL,
  destAdd_id INTEGER NOT NULL,
  distance FLOAT NOT NULL,
  hide BOOLEAN,
  PRIMARY KEY(route_id),
  FOREIGN KEY(startAdd_id) REFERENCES address_tbl(add_id),
  FOREIGN KEY(destAdd_id) REFERENCES address_tbl(add_id),
  UNIQUE(startAdd_id,destAdd_id)
);`
  );
  console.log("Table route_tbl created");
}

export function queryCreateDrivenRoute() {
  sqlite.run(
    `
CREATE TABLE IF NOT EXISTS drivenRoute_tbl (
  dRoute_id INTEGER NOT NULL,
  date DATE NOT NULL,
  route_id INTEGER NOT NULL,
  PRIMARY KEY(dRoute_id),
  FOREIGN KEY(route_id) REFERENCES route_tbl(route_id)
);`
  );
}

export function deleteTable(tableName, value) {
  sqlite.run(`DELETE FROM ${tableName} ;`, function (res) {
    if (res.error) throw res.error;
    console.log(res);
  });
}

//----Address
export function getAllAddress() {
  return sqlite.run(`SELECT * FROM address_tbl;`);
}

export function insertAddress(address) {
  sqlite.run(
    `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide) VALUES (${address.name}, ${address.street}, ${address.hnr}, ${address.plz}, ${address.place}, ${address.info}, 0)`
  );
}

export function deleteAddressById(id) {
  sqlite.run(`DELETE FROM address_tbl WHERE add_id = ${id};`);
}

export function updateAddressTblHideById(id, hide) {
  sqlite.run(`UPDATE address_tbl SET hide = ${hide} WHERE add_id LIKE ${id};`);
}

export function insertTestAddress() {
  sqlite.run(
    `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide) VALUES ( 'Fam. A','Heuchler Straße','12a','12345','Blöd-Hausen', null, 0);`
  );
  sqlite.run(
    `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide)  VALUES ( 'Fam. Ch', 'Bimmel Bammel Weg', '666', '12345', 'Blöd-Hausen', 'Goßes schwarzes Haus', 0);`
  );
  sqlite.run(
    `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide) VALUES ( 'J.Amt','Helferstr.', '4b', '00010',' Meuchel-Berg', null, 0);`
  );
  sqlite.run(
    `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide) VALUES ( 'Arbeit', 'Buckelstraße', '34', '00100', 'Heuchel-Berg', 'Büro', 0);`
  );
}

//----Route

export function getAllRoutes() {
  return sqlite.run(`SELECT * FROM route_tbl`);
}

// export  function getAllDisplayedRoutes() {
//   return  all`SELECT * FROM route_tbl WHERE hide = 0`;
// }

export function deleteRouteById(id) {
  console.log(id);
  sqlite.run(`DELETE FROM route_tbl WHERE route_id = ${id};`);
}

export function deleteRouteByAddressId(id) {
  sqlite.run(
    `DELETE FROM route_tbl WHERE startAdd_id = ${id} OR destAdd_id = ${id};`
  );
}

export function insertRoute(route) {
  sqlite.run(
    `INSERT INTO route_tbl VALUES (null,${route.startAdd_id}, ${route.destAdd_id}, ${route.distance},0)`
  );
}

// export  function insertRoutes(routes) {
//   const populate = transaction();
//   routes.forEach(
//     (route) =>
//       populate`INSERT INTO route_tbl VALUES (null,${route.startAdd_id}, ${route.destAdd_id}, ${route.distance},0)`
//   );
//    populate.commit();
// }

export function updateRouteTblHideById(id, hide) {
  sqlite.run(`UPDATE route_tbl SET hide = ${hide} WHERE route_id LIKE ${id};`);
}

// export  function updateRouteTblHideByRoute(route,hide) {
//    sqlite.run`UPDATE route_tbl SET hide = ${hide} WHERE startAdd_id = ${route.startAdd_id} AND  ;`;
// }

export function insertTestRoutes() {
  sqlite.run(
    `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance,hide) VALUES (1,3,25,0);`
  );
  sqlite.run(
    `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance,hide) VALUES (2,3,16.5,0);`
  );
  sqlite.run(
    `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance,hide) VALUES (4,1,5.3,0);`
  );
  try {
  } catch ({ message }) {
    console.log(message);
  }
  console.log("Inset test routes");
}

// //----DrivenRoute

export function getAllDrivenRoutes() {
  return sqlite.run(`SELECT * FROM drivenRoute_tbl`);
}
export function insertDrivenRoute(drivenRoute) {
  sqlite.run(
    `INSERT INTO drivenRoute_tbl VALUES (null,${drivenRoute.date}, ${drivenRoute.route_id})`
  );
}

export function getDrivenRoutesByDate(date) {
  return sqlite.run(`SELECT * FROM drivenRoute_tbl WHERE date LIKE ${date};`);
}

export async function getDrivenRoutesByMonth(year, month) {
  let query = await sqlite.run(
    `SELECT * FROM drivenRoute_tbl WHERE date LIKE '${year}-${month}-%%';`
  );
  console.log(query);
  return query;
}

export function deleteDrivenRouteById(id) {
  sqlite.run(`DELETE FROM drivenRoute_tbl WHERE dRoute_id LIKE ${id};`);
}

export function deleteDrivenRouteByRoute(route) {
  sqlite.run(
    `DELETE FROM drivenRoute_tbl WHERE route_id LIKE ${route.route_id};`
  );
}

// export  function getDb() {
//   // single query as any info
//   console.log( query`.databases`);
// }

// // }
// //   // transaction (requires .commit() to execute)

// //   for (let i = 0; i < 2; i++)
// //     populate`INSERT INTO names (name) VALUES (${"Name" + i})`;
// //    populate.commit();

// //   // get single row (works with LIMIT 1 too, of course)
// //    console.log(get`SELECT name FROM names`);
// //   // { name: 'Name0' }

// //   // get all results, if any, or an empty array
// //    console.log(all`SELECT * FROM names`);
// //   // [ { id: 1, name: 'Name0' }, { id: 2, name: 'Name1' } ]

// //   // use the IN clause through arrays
// //   const list = ["Name 0", "Name 1"];
// //    console.log(all`SELECT * FROM names WHERE name IN (${list})`);
