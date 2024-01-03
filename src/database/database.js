import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'fahrtenbuch.db', location: 'default'});
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
      FOREIGN KEY(destAdd_id) REFERENCES address_tbl(add_id),
      UNIQUE(startAdd_id,destAdd_id)
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
    return db.executeSql(insertQuery);
  } catch (error) {
    console.error(error);
    throw Error('Failed to save Address !!!');
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

// --- Route
export const saveRoute = async (db, route) => {
  try {
    const insertQuery = `INSERT INTO route_tbl (startAdd_id,destAdd_id,distance, hide) VALUES ('${route.startAdd_id}','${route.destAdd_id}','${route.distance}',0)`;
    return db.executeSql(insertQuery);
  } catch (error) {
    console.error(error);
    throw Error('Failed to save Route !!!');
  }
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

// --- drivenRoute

export const saveDrivenRoute = async (db, drivenRoute) => {
  try {
    const insertQuery = `INSERT INTO drivenRoute_tbl (date,route_id) VALUES ('${drivenRoute.date}',${drivenRoute.route_id})`;
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
      `SELECT * FROM drivenRoute_tbl WHERE DATE BETWEEN '${startDate}' AND '${endDate}' ;`,
    );

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        entries.push(result.rows.item(index));
      }
    });
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
