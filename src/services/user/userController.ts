import mongoose from "mongoose"
import User, { UserDocument } from "../../database/models/user"
import { Request } from "express"

const getUsers = async (): Promise<Array<UserDocument>> => await User.find({})

const createUser = async (req: Request): Promise<UserDocument> => {
	let newUser: UserDocument = req.body
	return await User.create(newUser)
}

const updateUser = async (req: Request): Promise<Object> => {
	let userId: string = req.params.id
	let userData: UserDocument = req.body
	return await User.findByIdAndUpdate(userId, userData).then((obj) => {
		let updatedUser = { id: userId, ...userData }
		return updatedUser
	})
}

const deleteUser = async (req: Request): Promise<string> => {
	let userId: string = req.params.id
	return await User.findByIdAndRemove(userId).then((obj) => `Deleted ${userId}`)
}

export default { getUsers, createUser, updateUser, deleteUser }
