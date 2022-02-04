import User from "../../database/models/userSchema"

const getUsers = () => User.find({})

const createUser = (newUser: string) => User.create(newUser)

const updateUser = (userId: string, userData: object) =>
	User.findByIdAndUpdate(userId, userData).then((obj) => {
		return { id: userId, ...userData }
	})

const deleteUser = (userId: string) =>
	User.findByIdAndRemove(userId).then((obj) => `Deleted ${userId}`)

export default { getUsers, createUser, updateUser, deleteUser }
