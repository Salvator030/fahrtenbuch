import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'fahrtenbuch.db', location: 'default'});
};

export const checkTable = async (db, tableName) => {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
  let result = await db.executeSql(query);
  if (result[0].rows.length === 0) {
    return false;
  } else {
    return true;
  }
};

export const getDbVersion = async db => {
  const query = 'SELECT dbVersion FROM settings_tbl;';
  const result = await db.executeSql(query);
  let rows = result[0].rows.raw();
  console.log(rows[rows.length - 1]);
  return rows[rows.length - 1].dbVersion;
};

export const updateDatabase = async (db, dbVersion) => {
  // add content when neded
  console.log('update');
};

export const createSettingsTable = async (db, dbVersion) => {
  // create table if not exists
  let query = 'CREATE TABLE settings_tbl (dbVersion INTEGER NOT NULL);';
  await db.executeSql(query);
  query = `INSERT INTO settings_tbl (dbVersion) Values (${dbVersion})`;
  await db.executeSql(query);
};

export const createAddressTable = async db => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS address_tbl ( 
    add_id INTEGER NOT NULL , 
    name VARCHAR(100) NOT NULL UNIQUE,
    street VARCHAR(100) NOT NULL,
    hnr varchar(5) NOt NULL,
    plz varchar(5) NOT NULL,
    place varchar(50) NOT NULL,
    info varchar(255),
    hide BOOLEAN,
    PRIMARY KEY(add_id)
);`;
  await db.executeSql(query);
};

export const createRouteTable = async db => {
  const query = `
    CREATE TABLE IF NOT EXISTS route_tbl (
      route_id INTEGER NOT NULL,
      startAdd_id INTEGER NOT NULL,
      destAdd_id INTEGER NOT NULL,
      distance FLOAT NOT NULL,
      hide BOOLEAN,
      PRIMARY KEY(route_id),
      FOREIGN KEY(startAdd_id) REFERENCES address_tbl(add_id),
      FOREIGN KEY(destAdd_id) REFERENCES address_tbl(add_id)
      );`;

  await db.executeSql(query);
};

export const createDrivenRouteTable = async db => {
  const query = `
    CREATE TABLE IF NOT EXISTS drivenRoute_tbl (
      dRoute_id INTEGER NOT NULL,
      date DATE NOT NULL,
      route_id INTEGER NOT NULL,
      PRIMARY KEY(dRoute_id),
      FOREIGN KEY(route_id) REFERENCES route_tbl(route_id)
    );`;
  await db.executeSql(query);
};

// -- general queys

export const getAllEntriesInTable = async (db, tableName) => {
  try {
    const entries = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        entries.push(result.rows.item(index));
      }
    });
    return entries;
  } catch (error) {
    console.error(error);
    throw Error(`Failed to get Items form ${tableName} !!!`);
  }
};

export const setHide = async (db, tableName, hide, idName, id) => {
  try {
    const deleteQuery = `UPDATE ${tableName} SET hide = ${hide} WHERE ${idName} = ${id};`;
    return db.executeSql(deleteQuery);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to delete entire ${id} from ${tableName} !!!`);
  }
};

export const deleteTable = async (db, tableName) => {
  try {
    const query = `drop table ${tableName}`;
    await db.executeSql(query);
  } catch (e) {
    throw Error(`Failed to delete ${tableName}`);
  }
};

// --querys for address_tbl

export const saveAddress = async (db, address) => {
  try {
    const insertQuery = `INSERT INTO address_tbl (name,street,hnr,plz,place,info,hide) VALUES ('${address.name}','${address.street}','${address.hnr}','${address.plz}','${address.place}','${address.info}',0)`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const deleteAddressById = async (db, id) => {
  try {
    const deleteQuery = `DELETE FROM address_tbl WHERE add_id = ${id};`;
    return db.executeSql(deleteQuery);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to delete address ${id}  !!!`);
  }
};

export const updateAddress = async (db, address) => {
  try {
    const insertQuery = `UPDATE address_tbl Set name = ${address.name}, street = ${address.street},hnr = ${address.hnr},plz = ${address.plz}, place = ${address.place} WHERE add_id = ${address.add_id} )`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const updateAddressName = async (db, name, id) => {
  try {
    const insertQuery = `UPDATE address_tbl Set name = "${name}" WHERE add_id = ${id}`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const updateAddressInfo = async (db, info, id) => {
  try {
    const insertQuery = `UPDATE address_tbl Set info = "${info}" WHERE add_id = ${id} `;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

// --- Route
export const saveRoute = async (db, route) => {
  try {
    let insertQuery = `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance, hide) VALUES ('${route.startAdd_id}','${route.destAdd_id}','${route.distance}',0)`;
    let res = await db.executeSql(insertQuery);
    console.log(res[0].insertId);
    return res;
  } catch (err) {
    return err;
  }
  /*  try {
    const insertQuery = `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance, hide) VALUES ('${route.startAdd_id}','${route.destAdd_id}','${route.distance}',0)`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    throw Error(error.message);
  }
  */
};

export const deleteRouteById = async (db, id) => {
  try {
    const deleteQuery = `DELETE FROM route_tbl WHERE route_id = ${id};`;
    return db.executeSql(deleteQuery);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to delete route ${id}  !!!`);
  }
};

export const updateRouteStartId = async (db, newId, oldId) => {
  try {
    const insertQuery = `UPDATE route_tbl Set startAdd_id = ${newId} WHERE startAdd_id = ${oldId}`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const updateRouteDestId = async (db, newId, oldId) => {
  try {
    const insertQuery = `UPDATE route_tbl Set destAdd_id = ${newId} WHERE destAdd_id = ${oldId}`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const changeRouteDistance = async (db, id, newDistance) => {
  try {
    const insertQuery = `UPDATE route_tbl Set distance = ${newDistance} WHERE route_id = ${id}`;
    return await db.executeSql(insertQuery);
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

// --- drivenRoute

export const saveDrivenRoute = async (db, drivenRoute) => {
  try {
    const insertQuery = `INSERT INTO drivenRoute_tbl (date,route_id) VALUES ('${Date.parse(
      drivenRoute.date,
    )}',${drivenRoute.route_id})`;
    console.log(
      `INSERT INTO drivenRoute_tbl (date,route_id) VALUES ('${Date.parse(
        drivenRoute.date,
      )}',${drivenRoute.route_id})`,
    );
    return db.executeSql(insertQuery);
  } catch (error) {
    console.error(error);
    throw Error('Failed to save drivenRoute !!!');
  }
};

export const getDrivenRoutesBetweenDates = async (db, startDate, endDate) => {
  try {
    const entries = [];
    const results = await db.executeSql(
      `SELECT * FROM drivenRoute_tbl WHERE DATE BETWEEN '${Date.parse(
        startDate,
      )}' AND '${Date.parse(endDate)}' ;`,
    );

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        entries.push(result.rows.item(index));
      }
    });
    console.log(
      `SELECT * FROM drivenRoute_tbl WHERE DATE BETWEEN '${Date.parse(
        startDate,
      )}' AND '${Date.parse(endDate)}' ;`,
    );
    return entries;
  } catch (error) {
    console.error(error);
    throw Error(`Failed getDrivenRoutes between ${startDate} - ${endDate} !!!`);
  }
};

export const deleteDrivenRouteById = async (db, id) => {
  try {
    const deleteQuery = `DELETE FROM drivenRoute_tbl WHERE dRoute_id = ${id};`;
    return db.executeSql(deleteQuery);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to delete drivenRoute ${id}  !!!`);
  }
};

export const deleteDrivenRouteByRouteId = async (db, route_id) => {
  console.log('deleteDrivenRouteByRouteId');
  try {
    const deleteQuery = `DELETE FROM drivenRoute_tbl WHERE route_id = ${route_id};`;
    return db.executeSql(deleteQuery);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to delete drivenRoutes with route_id ${route_id}  !!!`);
  }
};

export const changeDrivenRoutesRouteIdAtDate = async (
  db,
  date,
  oldId,
  newId,
) => {
  console.log(newId);
  console.log(oldId);
  console.log(date);
  try {
    // UPDATE drivenRoute_tbl Set route_id = ${newId} WHERE route_id = ${oldId} AND date >= '${date}'
    const updateQuery = `UPDATE drivenRoute_tbl Set route_id = ${newId} WHERE route_id = ${oldId} AND date >= '${date}'`;
    let res = await db.executeSql(updateQuery);
    var len = res[0].rows.length;
    for (let i = 0; i < len; i++) {
      let row = res[0].rows.item(i);
      console.log(row);
    }
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
