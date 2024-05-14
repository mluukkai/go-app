const express = require('express');

const app = express();
const port = 3000;
const environment = process.env.ENV

app.get('/', (req, res) => {
  res.send('Hello from ' + environment);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});