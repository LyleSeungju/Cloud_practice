const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // CORS 미들웨어 추가

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

const port = 3333;
app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
