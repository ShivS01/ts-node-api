import { model, Schema } from "mongoose"

interface User {
	name: string
	email: string
}

const userSchema = new Schema<User>({
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

export default model("User", userSchema)
