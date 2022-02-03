import express, { Request, Response, Router } from "express"

export const dataRouter = Router()

dataRouter.get("/", async (req: Request, res: Response) => {
	res.status(200).send("Hello world")
})
