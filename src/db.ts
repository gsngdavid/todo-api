import { JsonDB, Config } from 'node-json-db';

const db = new JsonDB(new Config('todoDatabase', true, true, '/'));

export default db;
