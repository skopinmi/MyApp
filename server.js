const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(express.static('site'));
// app.use(express.css());

app.get('/index.html', (req, res) => {
   fs.readFile('site' + res, 'utf8', (err, data) => {
      if (!err) {
         res.send(data);
      } else {
         res.send('<h1>Error</h1>')
      }
   });
});

app.listen(8000, function() {
   console.log('server is running on port 3000!');
 });
