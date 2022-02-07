import mongoose, { ObjectId } from "mongoose"

export interface UserInput {
	name: string
	email: string
}

export interface UserDocument extends UserInput, mongoose.Document {
	id: ObjectId
	createdAt: Date
	updatedAt: Date
}

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
})

userSchema.set("toJSON", {
	transform: (document, returnedObj) => {
		returnedObj.id = returnedObj._id.toString()
		delete returnedObj._id
		delete returnedObj.__v
		delete returnedObj.createdAt
		// delete returnedObj.updatedAt
	},
})

export default mongoose.model<UserDocument>("User", userSchema)
