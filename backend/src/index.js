"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
//initial Express app
const app = (0, express_1.default)();
const port = 5000;
//middleware for CORS to allow requests from frontend
app.use((0, cors_1.default)());
//connect to the postrgeSql dataBase
const pool = new pg_1.Pool({
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
app.get('/api/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM jobs');
        res.json(result.rows);
    }
    catch (error) {
        console.log('Error fetching data from the database:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
//start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
