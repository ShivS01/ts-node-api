/**
 * Required External Modules
 */
import express from "express"
import cors from "cors"
import * as logger from "./utils/logger"
import { dataRouter } from "./controller/dataRoute"
import { errorHandler } from "./middleware/errorMiddlerware"
import { notFoundHandler } from "./middleware/notFoundMiddleware"
import * as config from "./config/configVars"
import { requestLogger } from "./middleware/requestLogger"
import * as db from "./database/mongodb"
// Intializing and configuring express app

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to DB
db.connect()
// mongoose.Promise = global.Promise
// mongoose
// 	.connect(config.mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// 	.then(() => logger.info("Connected to DB!"))
// 	.catch((error) => logger.error("Error connecting to MongoDB:", error.message))

// Request logger middleware
app.use(requestLogger)

// Routes setup
app.use("/api/", dataRouter)

// Error Handler middleware
app.use(errorHandler)
app.use(notFoundHandler)

// Server
app.listen(config.port, () => {
	logger.info(`Listening on port ${config.port}`)
})
