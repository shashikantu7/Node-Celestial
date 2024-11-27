const fs = require("fs");

const requestHandler =(req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
    
        req.on('end', () => { //callback code use return then line 36 to 41 will not eecute
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {// if we have error to get data then it is showing 302
                res.statusCode = 302; //if we have large line of data it not execute before other code
                res.setHeader('Location', '/');
                return res.end();
            }); //synchronus code
    
        });
    }
    
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    someText: "hello everyone "
};