import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import { config } from "dotenv"
//
// Routes
import characters from "./routes/characters.js"
import status from "./routes/status.js"
import species from "./routes/species.js"

// Variables
config({path: "./config.env"})
const port = process.env.PORT || 3000
const db = process.env.ATLAS_URI

// Middlewares
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/API/species", species)
app.use("/API/status", status)
app.use("/API", characters)

// Connection with MongoDB
mongoose.set("strictQuery", false)
mongoose.connect(db)
	.then((a) => console.log("Connection with database established") )
	.catch((error) => console.log(`${error}`))

app.get('/', (req, res) => {
	res.json({msg: "Hello world"})
})

// Run
app.listen(port, () => {
	console.log(`Started server on port ${port}`)
} )
