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
  try {
    return await database.saveAddress(db, address);
  } catch (error) {
    if (error.message === 'UNIQUE constraint failed: address_tbl.name') {
      return 'addressExist';
    }
  }
};

export const deleteAddress = async add_id => {
  const db = await database.getDBConnection();
  return await database.deleteAddressById(db, add_id);
};

export const updateAddress = async address => {
  const db = await database.getDBConnection();
  return await database.updateAddress(db, address);
};

export const updateAddressName = async (name, id) => {
  const db = await database.getDBConnection();
  return await database.updateAddressName(db, name, id);
};

export const updateAddressInfo = async (info, id) => {
  const db = await database.getDBConnection();
  return await database.updateAddressInfo(db, info, id);
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
  try {
    let res = await database.saveRoute(db, route);
    return res[0].insertId;
  } catch (error) {
    if (
      error.message ===
      'UNIQUE constraint failed: route_tbl.startAdd_id, route_tbl.destAdd_id'
    ) {
      return 'routeExist';
    }
  }
};

export const deleteRoute = async route_id => {
  const db = await database.getDBConnection();
  return await database.deleteRouteById(db, route_id);
};

export const setRouteHide = async (id, hide) => {
  const db = await database.getDBConnection();
  return await database.setHide(db, routeTable, hide, 'route_id', id);
};

export const updtaeRoute = async (newId, oldId) => {
  const db = await database.getDBConnection();
  await database.updateRouteStartId(db, newId, oldId);
  await database.updateRouteDestId(db, newId, oldId);
};

export const changeRouteDistance = async (id, newDistance) => {
  const db = await database.getDBConnection();
  await database.changeRouteDistance(db, id, newDistance);
};

export const changeRouteDistanceAtDate = async (id, newDistance, date) => {
  const db = await database.getDBConnection();
  await database.changeRouteDistanceAtDate(db, id, newDistance, date);
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
  return await database.getDrivenRoutesBetweenDates(db, startDate, endDate);
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
  const db = await database.getDBConnection();
  return await database.deleteDrivenRouteByRouteId(db, route_id);
};

export const changeDrivenRoutesRouteIdAtDate = async (date, oldId, newId) => {
  const db = await database.getDBConnection();
  return await database.changeDrivenRoutesRouteIdAtDate(db, date, oldId, newId);
};
