import express, { NextFunction, Request, Response } from 'express'

const router = express.Router()

router.get('/who-made-me', (req: Request, res: Response, next: NextFunction) => {
  const name: string = process.env.NAME || 'Dmitry Kryukov'
  const funFact: string =
    'I&apos;m a little into electronics and love soldering. I have a DIY electric skateboard that I haven&apos;t ridden for a year and I built an FPV racing drone that I still haven&apos;t flown because I haven&apos;t mastered the simulator well enough to avoid breaking it.'
  try {
    res.send(`This project was made by ${name}. <br/> ${funFact}`)
  } catch (error) {
    next(error)
  }
})

export default router
