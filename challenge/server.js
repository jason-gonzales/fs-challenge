const express = require('express');
const app = express();

app.use(function (req,res,next) {
  res.send('hello werld');
  next();
})

app.listen(3000,() => {
  console.log("listening on port 3000")
});
