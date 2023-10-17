import SQLiteTagSpawned from "sqlite-tag-spawned";

const { query, get, all, raw, transaction } = SQLiteTagSpawned("./db.sql");

export async function queryCreateTableAddress() {
  await query`CREATE TABLE IF NOT EXISTS address_tbl ( 
    add_id INTEGER NOT NULL , 
    name VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    hnr varchar(5) NOt NULL,
    plz varchar(5) NOT NULL,
    place varchar(50) NOT NULL,
    info varchar(255),
    PRIMARY KEY(add_id)
);`;
  console.log("Table address_tbl created");
}

export async function queryCreateTableRoute() {
  await query`
CREATE TABLE IF NOT EXISTS route_tbl (
  route_id INTEGER NOT NULL,
  startAdd_id INTEGER NOT NULL,
  destAdd_id INTEGER NOT NULL,
  distance FLOAT NOT NULL,
  PRIMARY KEY(route_id),
  FOREIGN KEY(startAdd_id) REFERENCES address_tbl(add_id),
  FOREIGN KEY(destAdd_id) REFERENCES address_tbl(add_id)
);`;
  console.log("Table route_tbl created");
}

export async function queryCreateDrivenRoute() {
  await query`
CREATE TABLE IF NOT EXISTS drivenRoute_tbl (
  dRoute_id INTEGER NOT NULL,
  date DATE NOT NULL,
  route_id INTEGER NOT NULL,
  PRIMARY KEY(dRoute_id),
  FOREIGN KEY(route_id) REFERENCES route_tbl(route_id)
);`;
  console.log("Table route_tbl created");
}

export async function deleteTable(tableName, value) {
  await query`DELETE FROM ${tableName} ;`;
}

//----Address
export async function getAllAddress() {
  return await all`SELECT * FROM address_tbl`;
}

export async function insertAddress(address) {
  console.log(address);
  const populate = transaction();
  populate`INSERT INTO address_tbl VALUES (null,${address.name}, ${address.street}, ${address.hnr}, ${address.plz}, ${address.place}, ${address.info})`;
  await populate.commit();
}

export async function insertAddresses(addresses) {
  const populate = transaction();
  addresses.forEach(
    (address) =>
      populate`INSERT INTO address_tbl VALUES (null, ${address.name}, ${address.street}, ${address.hnr}, ${address.plz}, ${address.place}, ${address.info})`
  );
  await populate.commit();
}

export async function insertTestAddress() {
  const populate = transaction();
  populate`INSERT INTO address_tbl (name,street,hnr,plz,place,info) VALUES ( 'Fam. A','Heuchler Straße','12a','12345','Blöd-Hausen', null);`;
  populate`INSERT INTO address_tbl (name,street,hnr,plz,place,info)  VALUES ( 'Fam. Ch', 'Bimmel Bammel Weg', '666', '12345', 'Blöd-Hausen', 'Goßes schwarzes Haus');`;
  populate`INSERT INTO address_tbl (name,street,hnr,plz,place,info) VALUES ( 'J.Amt','Helferstr.', '4b', '00010',' Meuchel-Berg', null);`;
  populate`INSERT INTO address_tbl (name,street,hnr,plz,place,info) VALUES ( 'Arbeit', 'Buckelstraße', '34', '00100', 'Heuchel-Berg', 'Büro');`;
  try {
    await populate.commit();
  } catch ({ message }) {
    console.error(message);
  }
  console.log("Inset test addresses");
}

//----Route
export async function getAllRoutes() {
  return await all`SELECT * FROM route_tbl`;
}

export async function insertRoute(route) {
  console.log(route);
  const populate = transaction();
  populate`INSERT INTO route_tbl VALUES (null,${route.start_id}, ${route.dest_id}, ${route.distance})`;
  await populate.commit();
}

export async function insertRoutes(routes) {
  const populate = transaction();
  routes.forEach(
    (route) =>
      populate`INSERT INTO route_tbl VALUES (null,${route.start_id}, ${route.dest_id}, ${route.distance})`
  );
  await populate.commit();
}

export async function insertTestRoutes() {
  const populate = transaction();
  populate`INSERT INTO route_tbl (startAdd_id,destAdd_id,distance) VALUES (1,3,25);`;
  populate`INSERT INTO route_tbl (startAdd_id,destAdd_id,distance) VALUES (2,3,16.5);`; 
  populate`INSERT INTO route_tbl (startAdd_id,destAdd_id,distance) VALUES (4,1,5.3);`;
  try {
    await populate.commit();
  } catch ({ message }) {
    console.log(message);
  }
  console.log("Inset test routes");
}

//----DrivenRoute

export async function getAllDrivenRoutes() {
  return await all`SELECT * FROM drivenRoute_tbl`;
}
export async function insertDrivenRoute(drivenRoute) {
  console.log(drivenRoute);
  const populate = transaction();
  populate`INSERT INTO drivenRoute_tbl VALUES (null,${drivenRoute.date}, ${drivenRoute.route_id})`;
  await populate.commit();
}

export async function getDrivenRoutesByDate(date){
  console.log(date)
  return await all`SELECT * FROM drivenRoute_tbl WHERE date LIKE ${date};`;
}

export async function getDrivenRoutesByMonth(year,month){
  return await all`SELECT * FROM drivenRoute_tbl WHERE date LIKE '${year}-${month}-%%';`;
}




export async function deleteDrivenRouteById(id) {
  await query`DELETE FROM drivenRoute_tbl WHERE dRoute_id LIKE ${id};`;
}



export async function getDb() {
  // single query as any info
  console.log(await query`.databases`);
}

// }
//   // transaction (requires .commit() to execute)

//   for (let i = 0; i < 2; i++)
//     populate`INSERT INTO names (name) VALUES (${"Name" + i})`;
//   await populate.commit();

//   // get single row (works with LIMIT 1 too, of course)
//   await console.log(get`SELECT name FROM names`);
//   // { name: 'Name0' }

//   // get all results, if any, or an empty array
//   await console.log(all`SELECT * FROM names`);
//   // [ { id: 1, name: 'Name0' }, { id: 2, name: 'Name1' } ]

//   // use the IN clause through arrays
//   const list = ["Name 0", "Name 1"];
//   await console.log(all`SELECT * FROM names WHERE name IN (${list})`);
