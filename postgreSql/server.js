const client = require('./connection.js')
const express = require('express');
const app = express();

client.connect();


app.get('/api/search', (req, res) => {
  const clientquery = req.query.q;
  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset);
  const sql=`SELECT * FROM bank1
  WHERE  LOWER(city) LIKE $1 or LOWER(branch) LIKE $1 or LOWER(states) LIKE $1 or LOWER(district) LIKE $1 or LOWER(address) LIKE $1  ORDER BY ifsc ASC LIMIT $2 OFFSET $3;`;
  client.query(sql, [`%${clientquery.toLowerCase()}%`, limit, offset], (err, result) => {
    if (!err) {
    
      res.send({"branches":result.rows});
     
    } else {
      console.log(err);
      res.status(404).send('Unexpected Error');
    }
  });
});

app.get('/api/branch', (req, res) => {
  const clientquery = req.query.q;
  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset);
  const sql = `SELECT * FROM bank1
  WHERE lower(branch) LIKE $1
  ORDER BY ifsc DESC
  LIMIT $2 OFFSET $3;`;

  client.query(sql, [`${clientquery.toLowerCase()}`, limit, offset], (err, result) => {
    if (!err) {
      res.send({"branches":result.rows});
    } else {
      console.log(err);
      res.status(404).send('Unexpected Error');
    }
  });
});

const port = process.env.PORT || 3000; // process obj to allocate port num
app.listen(port, () => console.log(`listening on port ${port}`));
