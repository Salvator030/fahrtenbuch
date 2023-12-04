import * as database from './database';
const addressTable = 'address_tbl';
const routeTable = 'route_tbl';
const drivenRouteTable = 'drivenRoute_tbl';

export const implementDatabase = async () => {
  const db = await database.getDBConnection();
  await database.createAddressTable(db);
  await database.createRouteTable(db);
  await database.createDrivenRouteTable(db);
};

// --- addresses
export const deleteAddressTable = async () => {
  const db = await database.getDBConnection();
  database.deleteTable(db, addressTable);
};

export const getAllAddresses = async () => {
  const db = await database.getDBConnection();
  return await database.getAllEntriesInTable(db, addressTable);
};

export const saveNewAddress = async address => {
  const db = await database.getDBConnection();
  return await database.saveAddress(db, address);
};

// --- routes
export const deleteRouteTable = async () => {
  const db = await database.getDBConnection();
  database.deleteTable(db, routeTable);
};

export const getAllRoutes = async () => {
  const db = await database.getDBConnection();
  return await database.getAllEntriesInTable(db, routeTable);
};

export const saveNewRoute = async route => {
  const db = await database.getDBConnection();
  return await database.saveRoute(db, route);
};

// --- drivenRoute
export const deleteDrivenRouteTable = async () => {
  const db = await database.getDBConnection();
  database.deleteTable(db, drivenRouteTable);
};

export const getAllDrivenRoutes = async () => {
  const db = await database.getDBConnection();
  return await database.getAllEntriesInTable(db, drivenRouteTable);
};

export const saveNewDrivenRoute = async drivenRoute => {
  const db = await database.getDBConnection();
  return await database.saveDrivenRoute(db, drivenRoute);
};
