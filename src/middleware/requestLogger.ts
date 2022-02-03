import { NextFunction, Request, Response } from "express"
import * as logger from "../utils/logger"

export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
	logger.info("---")
	logger.info("Method:", request.method)
	logger.info("Path:  ", request.path)
	logger.info("Body:  ", request.body)
	logger.info("---")
	next()
}
