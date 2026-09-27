import express from 'express'
import cors from 'cors'
import { z } from 'zod'

const app = express()
const port = Number(process.env.PORT ?? 4000)
const clientUrl = process.env.CLIENT_URL ?? 'http://localhost:5173'

app.use(cors({ origin: clientUrl, credentials: true }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'rcov-api', timestamp: new Date().toISOString() })
})

const gaidaMessageSchema = z.object({
  message: z.string().trim().min(1).max(4000),
  conversationId: z.string().cuid().optional(),
})

app.post('/api/gaida/messages', (request, response) => {
  const parsed = gaidaMessageSchema.safeParse(request.body)
  if (!parsed.success) {
    response.status(400).json({ error: 'Message must be between 1 and 4000 characters.' })
    return
  }

  response.status(202).json({
    status: 'queued',
    conversationId: parsed.data.conversationId ?? null,
    message: 'Gaida is not configured yet. Add AI_API_KEY on the server to enable responses.',
  })
})

app.use((_request, response) => response.status(404).json({ error: 'Route not found' }))

app.listen(port, () => {
  console.log(`RCOV API listening on http://localhost:${port}`)
})
