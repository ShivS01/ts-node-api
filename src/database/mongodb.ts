import moongoose from "mongoose"
import config from "../config/configVars"

// let database: moongoose.Connection
const connect = () => {
	// if (database) {
	// 	return
	// }
	moongoose
		.connect(config.mongodbURI)
		.then(() => console.log(`Connected DB`))
		.catch((err) => console.log(err))
	// database = moongoose.connection
	// database.once("open", async () => {
	// 	console.log("Connected to database")
	// })
	// database.on("error", () => {
	// 	console.log("Error connecting to database")
	// })
}
// export const disconnect = () => {
// 	if (!database) {
// 		return
// 	}
// 	moongoose.disconnect()
// }

export default { connect }
