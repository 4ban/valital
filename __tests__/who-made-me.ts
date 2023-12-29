import app from '../src/app'
import request from 'supertest'

describe('Test the api/v1/who-made-me path', () => {
  test('It should return 404 for wrong path', async () => {
    const response = await request(app).get('/who-made-me')
    expect(response.statusCode).toBe(404)
  })
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/v1/who-made-me')
    expect(response.statusCode).toBe(200)
  })

  test('It should return response that contain Dmitry Kryukov', async () => {
    const response = await request(app).get('/api/v1/who-made-me')
    expect(response.text).toContain('Dmitry Kryukov')
  })
})
