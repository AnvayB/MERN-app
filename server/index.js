import { express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { cors } from "cors";
import { dotenv } from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/* CONFIGURATIONS - middleware */

const __filename = fileURLToPath(import.meta.url)   //grab the file url when using modules
const __dirname = path.dirname(__filename)          //gets directory of the file
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use()
