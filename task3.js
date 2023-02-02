//Based on the url the user hits ,return custom responses.
//When url = /home , return response ==> Welcome home
//When url = /about, return response ==> Welcome to About Us page
//When url =/node, return response ==> Welcome to my Node Js project

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('ContentIType', 'text/html')
    if(req.url === '/home')
    {
        res.write('Welcome home');
    }
    if(req.url === '/about')
    {
        res.write(' Welcome to About Us page');
    }
    if(req.url === '/node')
    {
        res.write('Welcome to my Node Js project');
    }
    res.end();
})

server.listen(4000);
