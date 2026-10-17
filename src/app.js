import express from 'express';

export const app = express();
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/greet/:name', (req, res) => res.json({ message: `Hello, ${req.params.name}!` }));
