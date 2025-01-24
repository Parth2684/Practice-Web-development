import { Client } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const client = new Client({
    connectionString: DATABASE_URL
})


async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );    
    `)
    console.log(result)
}

createUsersTable();