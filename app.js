'use strict';

const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello, world!')
//     .end();
// });
app.use('/imgs', express.static(__dirname + '/app/view/assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/view/index.html'))
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
