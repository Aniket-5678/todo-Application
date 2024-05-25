import express from "express"
import dotenv from "dotenv"
import connectionDB from "./db/db.js"
import cors from "cors"
import taskRoutes from "./routes/taskRoutes.js"
import path from "path"

const __dirname = path.dirname(new URL(import.meta.url).pathname);

dotenv.config()


connectionDB()


const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.static(path.join(__dirname, "./client/build")));

app.use('/api/v1/task', taskRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });


app.listen(process.env.PORT ,() => {
    console.log(`server is running on PORT ${process.env.PORT}`);
})