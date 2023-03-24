const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//loging the data to the console
app.post('/log', (req, res) => {
  console.log(req.body);
  res.status(200).send('Received data');
});

//starts a server and listens on port 5000 for connections
app.listen(5000, () => {
  console.log('Server started on port 5000');
});