import User from "../../database/models/userSchema"

export const getUsers = () => User.find({})

export const createUser = (newUser: string) => User.create(newUser)

export const updateUser = (userId: string, userData: object) =>
	User.findByIdAndUpdate(userId, userData).then((obj) => {
		return { id: userId, ...userData }
	})

export const deleteUser = (userId: string) =>
	User.findByIdAndRemove(userId).then((obj) => `Deleted ${userId}`)
