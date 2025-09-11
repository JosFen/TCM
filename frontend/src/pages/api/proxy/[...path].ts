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
    target: 'http://backend:4000', // Express backend
    changeOrigin: true,
    pathRewrite: { '^/api/proxy': '' },
  })
  return proxy(req, res, () => console.log('error in proxy') )
}
