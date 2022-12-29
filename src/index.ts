// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     console.log('hello from server');
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log('server on http://localhost:3001');
// });

import app from './server';
import * as dotenv from 'dotenv';

dotenv.config();

app.listen(3001, () => {
  console.log('hello on http://localhost:3001');
});