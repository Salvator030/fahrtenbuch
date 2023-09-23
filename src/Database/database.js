import SQLiteTagSpawned from "sqlite-tag-spawned";

const { query, get, all, raw, transaction } = SQLiteTagSpawned("./db.sql");


export async function createTables() {
  await query`CREATE TABLE IF NOT EXISTS address_tbl ( 
    add_id  INTEGER AUTO_INCREMENT PRIMARY KEY , 
    name VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    hnr varchar(5) Not NULL,
    plz varchar(5) NOT NULL,
    place varchar(50) NOT NULL,
    info varchar(255)
);`;
}
export async function deleteTable(tableName){
  await query`DELETE FROM ${tableName};`
}

export async function insertAddress(name, street, hnr, plz, place) {
  const populate = transaction();
  populate`INSERT INTO address_tbl VALUES (null,name,street,hnr,plz, place,info)`;
  await populate.commit();
}

export async function insertAddresses(addresses){
  const populate = transaction();
  addresses.forEach((address) =>  populate`INSERT INTO address_tbl VALUES (null, ${address.name}, ${address.street}, ${address.hnr}, ${address.plz}, ${address.place}, ${address.info})`);
  await populate.commit();

}

export async function insertTestAddress(){
  const populate = transaction();
  populate`INSERT INTO address_tbl VALUES (null,"Fam. A","Heuchler Straße","12a","12345","Blöd-Hausen", null);`;
  populate`INSERT INTO address_tbl VALUES (null, "Fam. Ch", "Bimmel Bammel Weg", "666", "12345", "Blöd-Hausen", "Goßes schwarzes Haus");`;
  populate`INSERT INTO address_tbl VALUES (null, "J.Amt","Helferstr.", "4b", "00010"," Meuchel-Berg", null);`;
  populate`INSERT INTO address_tbl VALUES (null, "Arbeit", "Buckelstraße", "34", "00100", "Heuchel-Berg", "Büro");`;
  await populate.commit();
}

export async function getAllAddress(){
  await console.log(all`SELECT * FROM address_tbl`);
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
