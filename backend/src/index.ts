import Express from "express";
import { Pool } from "pg";
import cors from "cors"

require('dotenv').config();


//initial Express app
const app = Express()
const port = 5000

//middleware for CORS to allow requests from frontend
app.use(cors())


//connect to the postrgeSql dataBase
const pool = new Pool({
    // user: process.env.DB_USER,    
    // host: process.env.DB_HOST,       
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
    // port: Number(process.env.DB_PORT),     
    user: process.env.DB_USER,    
    host: process.env.DB_HOST,       
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),     
  });

//API endpoint to fetch data from the database
app.get('/api/jobs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM jobs')
        res.json(result.rows)
    } catch (error) {
        console.log('Error fetching data from the database:', error)
        res.status(500).json({message : "Internal Server Error"})
    }
})

//start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
  });