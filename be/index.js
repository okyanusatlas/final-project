const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const calculate = require('./calculate');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/calculate' ,(req, res) => {
  const result = calculate(req.body.str);
  res.send({
    result
  });

});
app.listen(5000, () =>
  console.log(`Example app listening on port 5000}!`),
);
