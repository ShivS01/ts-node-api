import { NextFunction, Request, Response } from "express"
import HttpException from "../utils/httpException"

export const errorHandler = (
	error: HttpException,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = error.statusCode || error.statusCode || 500
	res.status(status).send(error)
}
