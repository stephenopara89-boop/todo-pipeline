const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Todo Pipeline API is running',
    status: 'success'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Todo Pipeline API running on port ${PORT}`);
});
