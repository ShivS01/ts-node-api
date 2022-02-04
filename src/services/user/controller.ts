import User from "../../database/models/userSchema"

export const getUsers = () => {
	User.find({})
		.then((data) => data)
		.catch((err) => err)
}
