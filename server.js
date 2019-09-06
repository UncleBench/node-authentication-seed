const express = require('express');
const basicAuth = require('express-basic-auth');

function main() {
  let server = express();

  const port = process.env.PORT || 8000;
  server.listen(port, () => console.log(`Server is listening on port: ${port}`));

  server.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true
  }));

  server.get("/topsecret", function(req, res) {
    res.send(`Hoi ${req.auth.user}`);
  });
}

main();
