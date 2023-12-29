import app from '../src/app'
import request from 'supertest'

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })

  test('It should render text: Hello Valital! I am alive!', async () => {
    const response = await request(app).get('/')
    expect(response.text).toEqual('Hello Valital! I am alive!')
  })
})
