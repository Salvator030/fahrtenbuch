import {parseDate} from '../asserts/dateHelper';
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
export const deleteAddress = async add_id => {
  const db = await database.getDBConnection();
  return await database.deleteAddressById(db, add_id);
};

export const setAddressHide = async (id, hide) => {
  const db = await database.getDBConnection();
  return await database.setHide(db, addressTable, hide, 'add_id', id);
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

export const deleteRoute = async route_id => {
  const db = await database.getDBConnection();
  return await database.deleteRouteById(db, route_id);
};

export const setRouteHide = async (id, hide) => {
  const db = await database.getDBConnection();
  return await database.setHide(db, routeTable, hide, 'route_id', id);
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

export const getDrivenRoutesBetweenDates = async (startDate, endDate) => {
  const db = await database.getDBConnection();
  return await database.getDrivenRoutesBetweenDates(
    db,
   startDate,
    endDate,
  );
};

export const saveNewDrivenRoute = async drivenRoute => {
  const db = await database.getDBConnection();
  return await database.saveDrivenRoute(db, drivenRoute);
};

export const deleteDrivenRoute = async dRoute_id => {
  const db = await database.getDBConnection();
  return await database.deleteDrivenRouteById(db, dRoute_id);
};

export const deleteDrivenRoutesByRouteId = async route_id => {
  console.log('deleteDrivenRoutesByRouteId, dbHandler ', route_id);
  const db = await database.getDBConnection();
  return await database.deleteDrivenRouteByRouteId(db, route_id);
};
