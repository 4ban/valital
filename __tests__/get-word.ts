import app from '../src/app'
import request from 'supertest'

describe('Test the /api/v1/get-word', () => {
  test('It should response 200 for empty url param', async () => {
    const response = await request(app).get('/api/v1/get-word')
    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('Provide a word as URL parameter. For example /get-word/cat')
  })

  test('It should response with error for wrong word', async () => {
    const response = await request(app).get('/api/v1/get-word/fgh')
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toContain(
      "Sorry pal, we couldn't find definitions for the word you were looking for."
    )
  })

  test('It should response with verb examples for bear', async () => {
    const response = await request(app).get('/api/v1/get-word/bear')
    expect(response.statusCode).toBe(200)
    expect(response.body.description).toEqual('Word can be used as verb')
    expect(response.body.examples).toContain('to bear a railroad stock')
  })

  test('It should response with definitions for cable', async () => {
    const response = await request(app).get('/api/v1/get-word/cable')
    expect(response.statusCode).toBe(200)
    expect(response.body.description).toEqual('Word can not be used as verb')
    expect(response.body.definitions).toContain('To communicate by cable')
  })
})
