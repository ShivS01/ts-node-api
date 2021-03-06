import * as dotenv from "dotenv"
dotenv.config()

// Node
// const env = process.env.NODE_ENV || "development"
// const isDevelopment = env === "development"
// const isTest = env === "test"

// Base
const appUrl: string = process.env.APP_URL || "localhost"
const port: number = Number(process.env.PORT || "3001")

// Database
const mongodbURI: string = process.env.MONGO_URI || ""
// const dbName: string = process.env.MONGO_DB_NAME || ""
// const collectionName: string = process.env.MONGO_DB_COLLECTION_NAME || ""
// const dbUsername: string = process.env.DB_USERNAME || ""
// const dbPassword: string = process.env.DB_PASSWORD || ""
// const dbName: string = process.env.DB_NAME || ""

export default { appUrl, port, mongodbURI }
