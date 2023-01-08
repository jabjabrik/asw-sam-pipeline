import express from 'express'
import serverless from 'serverless-http'

const app = express()
app.get('/', (req, res) => res.json({ message: 'hello world siuu' }))
export const handler = serverless(app)