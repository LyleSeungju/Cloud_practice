const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

const port = 3333;
app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
