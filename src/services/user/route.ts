import { NextFunction, Request, Response, Router } from "express"
import { ObjectId } from "mongoose"
import userController from "./userController"

const userRouter = Router()
const routeConfig = {
	getAllUsers: {
		path: "/users",
		method: "get",
		handler: userController.getUsers,
	},
	createUser: {
		path: "/create",
		method: "post",
		handler: userController.createUser,
	},
	updateUser: {
		path: "/update/:id",
		method: "post",
		handler: userController.updateUser,
	},
	deleteUser: {
		path: "/remove/:id",
		method: "post",
		handler: userController.deleteUser,
	},
}

userRouter.get(
	routeConfig.getAllUsers.path,
	async (req: Request, res: Response, next: NextFunction) => {
		let data = await userController.getUsers().catch((err) => next(err))
		res.json(data)
	}
)

userRouter.post(
	routeConfig.createUser.path,
	async (req: Request, res: Response, next: NextFunction) => {
		let createdUser = await userController.createUser(req.body).catch((err) => next(err))
		res.json(createdUser)
	}
)

userRouter.put(
	routeConfig.updateUser.path,
	async (req: Request, res: Response, next: NextFunction) => {
		let id: ObjectId = Object(req.params.id)
		let updatedUser = await userController.updateUser(id, req.body).catch((err) => next(err))
		res.json(updatedUser)
	}
)

userRouter.delete(
	routeConfig.deleteUser.path,
	async (req: Request, res: Response, next: NextFunction) => {
		let msg = await userController.deleteUser(Object(req.params.id)).catch((err) => next(err))
		res.send(msg)
	}
)

export default userRouter
