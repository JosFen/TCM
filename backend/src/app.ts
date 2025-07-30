import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { corsOptions } from './constants/config';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Main routes
app.use(routes);

// Test endpoint (optional)
app.get('/', (_req, res) => {
  res.json({
    message: "Hello, TypeScript with Express!",
    client_url: corsOptions.origin,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;