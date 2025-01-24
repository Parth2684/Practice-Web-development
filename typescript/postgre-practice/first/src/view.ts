import * as dotenv from "dotenv";
import { Client } from "pg";

// Load environment variables from .env file
dotenv.config();

// Get the DATABASE_URL from the environment
const DATABASE_URL = process.env.DATABASE_URL;

// Create a new client to connect to PostgreSQL
const client = new Client({
    connectionString: DATABASE_URL,
});

async function getUsers() {
    try {
        // Connect to the database
        await client.connect();

        // Query to fetch all users from the 'users' table
        const result = await client.query('SELECT * FROM users;');

        // Log the results (this will be an array of users)
        console.log("Users:", result.rows);

        return result.rows; // Return the user data to use in the app
    } catch (err) {
        console.error("Error fetching users:", err);
    } finally {
        // Disconnect the client
        await client.end();
    }
}

// Call the function to fetch users
getUsers();
