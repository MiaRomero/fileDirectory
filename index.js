const express = require('express');
cosnt app = express();
const filesRouter = require('/filesRouter');

app.get('/hello', (req, res) => {
  res.send('<h2>Hello World</h2>');
});

app.use('/files', filesRouter);
app.use('/*', (req, res) => {
  res.status(404).send('<h2>404 Not Found</h2>');
});

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
