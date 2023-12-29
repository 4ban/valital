import express, { NextFunction, Request, Response } from 'express'
import axios, { AxiosError } from 'axios'

const router = express.Router()

type MeaningType = {
  partOfSpeech: string
  definitions: DefinitionType[]
}
type DefinitionType = {
  definition?: string
  example?: string
  synonyms?: string[]
  antonyms?: string[]
}

router.get('/get-word', (req: Request, res: Response, next: NextFunction) => {
  res.send('Provide a word as URL parameter. For example /get-word/cat')
})

router.get('/get-word/:word', async (req: Request, res: Response, next: NextFunction) => {
  const word: string = req.params.word

  try {
    if (!word) {
      res.status(500)
      throw new Error('Something went wrong')
    }

    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    let verbExamples: any = []
    let allDefinitions: any = []

    response.data?.forEach((word: any) => {
      word.meanings.forEach((meaning: any) => {
        // Extract all definitions for verbs with examples
        if (meaning.partOfSpeech === 'verb') {
          meaning.definitions.forEach((def: any) => {
            if (def.example) {
              verbExamples.push(def.example)
            }
          })
        }
        // Extract all definitions from all meanings
        meaning.definitions.forEach((def: any) => {
          allDefinitions.push(def.definition)
        })
      })
    })

    if (verbExamples.length > 0) {
      res.json({ word, description: 'Word can be used as verb', examples: verbExamples })
    } else if (allDefinitions.length > 0) {
      res.json({ word, description: 'Word can not be used as verb', definitions: allDefinitions })
    } else {
      res.status(500)
      throw new Error('Something went wrong! Word can not be used as verb and does not have definitions')
    }
  } catch (error: Error | AxiosError | any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        error.message = error.message + ' ' + error.response.data.message
      }
      res.status(error?.response?.status as number)
      next(error)
    } else {
      next(error)
    }
  }
})

export default router
