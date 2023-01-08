import express from 'express'
import serverless from 'serverless-http'

const app = express()
app.get('/', (req, res) => res.json({ message: 'hello world new' }))
export const handler = serverless(app)