import { Client } from "pg";

import * as dotenv from "dotenv";
dotenv.config();




async function addData() {

    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })

    try{
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES($1, $2, $3)"
        const values = ["username3", "username3@gmail.com", "user3"]
        const res = await client.query(insertQuery, values);
        console.log("success", res)
    }catch (err) {
        console.error("error", err)
    }finally{
        await client.end()
    }
}
addData()