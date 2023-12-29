import { NextFunction, Request, Response } from 'express'

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404)
  const error = new Error(`Not Found - [${req.method}]${req.originalUrl}`)
  next(error)
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.json({
    message: err.message,
    status: res.statusCode,
    error: err,
    stack: err.stack
  })
}
