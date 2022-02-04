import { NextFunction, Request, Response, Router } from "express"
import { createUser, deleteUser, getUsers, updateUser } from "./controller"

const userRouter = Router()

userRouter.get("/users", async (req: Request, res: Response, next: NextFunction) => {
	let data = await getUsers().catch((err) => next(err))
	res.json(data)
})

userRouter.post("/create", async (req: Request, res: Response, next: NextFunction) => {
	let createdUser = await createUser(req.body).catch((err) => next(err))
	res.json(createdUser)
})

userRouter.put("/update/:id", async (req: Request, res: Response, next: NextFunction) => {
	let updatedUser = await updateUser(req.params.id, req.body).catch((err) => next(err))
	res.json(updatedUser)
})

userRouter.delete("/remove/:id", async (req: Request, res: Response, next: NextFunction) => {
	let msg = await deleteUser(req.params.id).catch((err) => next(err))
	res.send(msg)
})

export default userRouter
