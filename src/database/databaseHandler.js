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

export const getAllAddresses = async () => {
  const db = await database.getDBConnection();
  return await database.getAllEntriesInTable(db, addressTable);
};

export const saveNewAddress = async address => {
  const db = await database.getDBConnection();
  return await database.saveAddress(db, address);
};

// --- routes

export const getAllRoutes = async () => {
  const db = await database.getDBConnection();
  return await database.getAllEntriesInTable(db, routeTable);
};

export const saveNewRoute = async route => {
  const db = await database.getDBConnection();
  return await database.saveRoute(db, route);
};
