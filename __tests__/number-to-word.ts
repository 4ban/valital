import app from '../src/app'
import request from 'supertest'

describe('Test the /api/v1/number-to-word', () => {
  test('It should response with word "zero" for number 0', async () => {
    const payload = { number: 0 }
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ word: 'zero' })
  })

  test('It should response with word "three" for number 3', async () => {
    const payload = { number: 3 }
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ word: 'three' })
  })

  test('It should response with word "nine" for number 9', async () => {
    const payload = { number: 9 }
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ word: 'nine' })
  })

  test('It should response with error for not a number', async () => {
    const payload = { number: 'test' }
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(500)
    expect(response.text).toContain('Not a number')
  })

  test('It should response with error for empty body', async () => {
    const payload = {}
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(500)
    expect(response.text).toContain('Not a number')
  })

  test('It should response with error for wrong number', async () => {
    const payload = { number: 99 }
    const response = await request(app).post('/api/v1/number-to-word').send(payload)
    expect(response.statusCode).toBe(500)
    expect(response.text).toContain('Wrong number')
  })
})
