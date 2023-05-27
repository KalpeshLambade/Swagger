import express from "express";
import router from "./routes/all-routes.js";
import morgan from "morgan";
import cors from 'cors'

const app = express();

app.use(cors())
app.use("/api/v1", router);
app.use(morgan("dev"))

app.listen(8000, ()=>console.log("Running on 8000"))
