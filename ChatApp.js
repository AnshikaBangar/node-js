
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // parse the URL to get the query parameters
  const query = req.url;

  // if a message is provided, write it to a file
  if (query.message) {
    fs.writeFileSync('message.txt', query.message, 'utf-8');
  }

  // read the contents of the message file
  let message = '';
  try {
    message = fs.readFileSync('message.txt', 'utf-8');
  } catch (err) {
    console.error(err);
  }

  // send the form and the message back to the client
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <p>Message: ${message}</p>
    <form>
      Message: <input type="text" name="message">
      <button type="submit">Submit</button>
    </form>
    
  `);
});

server.listen(4000);
