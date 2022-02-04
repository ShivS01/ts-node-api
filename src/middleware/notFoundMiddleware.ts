import { NextFunction, Request, Response } from "express"

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
	const message = "Resource not found"
	res.status(400).send(message)
}
export default notFoundHandler
