import { CreateQuery, ObjectId } from "mongoose"
import User, { UserDocument } from "../../database/models/user"

const getUsers = async (): Promise<Array<UserDocument>> => await User.find({})

const createUser = async (newUser: CreateQuery<UserDocument>): Promise<UserDocument> =>
	await User.create(newUser)

const updateUser = async (userId: ObjectId, userData: UserDocument) =>
	await User.findByIdAndUpdate(userId, userData).then((obj) => {
		userData.id = userId
		return userData
	})

const deleteUser = async (userId: ObjectId) =>
	await User.findByIdAndRemove(userId).then((obj) => `Deleted ${userId}`)

export default { getUsers, createUser, updateUser, deleteUser }
