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

export const getAllAddresses = async () => {
  const db = await database.getDBConnection();
  return await db.getAllEntriesInTable(db, addressTable);
};

export const saveNewAddress = async address => {
  const db = await database.getDBConnection();
  db.saveAddress(address);
};
