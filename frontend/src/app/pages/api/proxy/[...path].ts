import { createProxyMiddleware } from 'http-proxy-middleware'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const proxy = createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000', // Express backend
    changeOrigin: true,
    pathRewrite: { '^/api/proxy': '' },
  })
  return proxy(req, res, () => null)
}
