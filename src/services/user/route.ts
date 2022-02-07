import { Router } from "express"
import logger from "../../utils/logger"
import userController from "./userController"
import genericHandler from "../../utils/routeUtil"

const userRouter = Router()
const routeConfig: {
	path: string
	method: "get" | "post" | "delete" | "put"
	handler: Function
}[] = [
	{
		path: "/users",
		method: "get",
		handler: userController.getUsers,
	},
	{
		path: "/create",
		method: "post",
		handler: userController.createUser,
	},
	{
		path: "/update/:id",
		method: "put",
		handler: userController.updateUser,
	},
	{
		path: "/remove/:id",
		method: "delete",
		handler: userController.deleteUser,
	},
]

routeConfig.map((route) => {
	userRouter[`${route.method}`](route.path, genericHandler(route.handler))
	logger.info(`HTTP ${route.method} route active`)
})

export default userRouter
