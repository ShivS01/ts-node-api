import * as Mongoose from "mongoose"
import * as config from "../config/configVars"

let database: Mongoose.Connection
export const connect = () => {
	if (database) {
		return
	}
	Mongoose.connect(config.mongodbURI)
	Mongoose.connect(config.mongodbURI)
	database = Mongoose.connection
	database.once("open", async () => {
		console.log("Connected to database")
	})
	database.on("error", () => {
		console.log("Error connecting to database")
	})
}
export const disconnect = () => {
	if (!database) {
		return
	}
	Mongoose.disconnect()
}
