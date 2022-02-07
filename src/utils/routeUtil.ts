import { NextFunction, Request, Response } from "express"

const genericHandler =
	(handler: any) => async (req: Request, res: Response, next: NextFunction) => {
		let response = await handler(req).catch((err: Error) => next(err))
		res.json(response)
	}

export default genericHandler
