import express from 'express'
import getWordRoute from './get-word-route'
import numberToWordRoute from './number-to-word-route'
import whoMadeMeRoute from './who-made-me-route'

export const router = express.Router()

router.use(getWordRoute)
router.use(numberToWordRoute)
router.use(whoMadeMeRoute)
