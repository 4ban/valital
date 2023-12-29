import express, { NextFunction, Request, Response } from 'express'

const router = express.Router()

router.post('/number-to-word', (req: Request, res: Response, next: NextFunction) => {
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  try {
    const number: number = req.body.number
    if (typeof number !== 'number') {
      res.status(500)
      throw new Error('Not a number')
    }
    if (number >= 0 && number <= 9) {
      res.json({ word: numberWords[number] })
    } else {
      res.status(500)
      throw new Error('Wrong number')
    }
  } catch (error) {
    // run middleware to handle the error
    next(error)
  }
})

export default router
