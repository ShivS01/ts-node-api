import { NextFunction, Request, Response, Router } from "express"
import { getUsers } from "./controller"

const userRouter = Router()

userRouter.get("/users", async (req: Request, res: Response, next: NextFunction) => {
	// Import controller logic
	let data = getUsers()
	res.send(data)
})

userRouter.post("/create", async (req: Request, res: Response, next: NextFunction) => {
	// Import controller logic
})

userRouter.put("/update/:id", async (req: Request, res: Response, next: NextFunction) => {
	// Import controller logic
})

userRouter.delete("/remove/:id", async (req: Request, res: Response, next: NextFunction) => {
	// Import controller logic
})

export default userRouter
