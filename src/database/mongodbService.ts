import moongoose from "mongoose"
import config from "../config/configVars"

const connect = () => {
	moongoose
		.connect(config.mongodbURI)
		.then(() => console.log(`Connected DB`))
		.catch((err) => console.log(err))
}
const disconnect = async () => {
	await moongoose.disconnect()
	await moongoose.connection.close()
}

export default { connect, disconnect }
