import express from "express"
import cors from "cors"
import logger from "./utils/logger"
import serviceRoute from "./services/"
import errorMiddleware from "./middleware/errorMiddlerware"
import notFoundMiddleware from "./middleware/notFoundMiddleware"
import config from "./config/configVars"
import requestLogger from "./middleware/requestLogger"
import db from "./database/mongodb"

// Intializing and configuring express app
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to DB
db.connect()

// Request logger middleware
app.use(requestLogger)

// Routes setup
app.use("/api/", serviceRoute)

// Error Handler middleware
app.use(errorMiddleware)
app.use(notFoundMiddleware)

// Server
app.listen(config.port, () => {
	logger.info(`Listening on port ${config.port}`)
})
