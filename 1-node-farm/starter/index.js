const fs = require('fs');  //fs = file system (node module)
const http = require('http');
const url = require('url');

//blocking, syncronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File Written');

////////////////////////////////////////
//FILES
//this is an example of synchronous/blocking code.
//this is a problem with heavy operations. To fix the problem use Asyncronous code/Non-blocking. Allows more time intensive things to run in the background while other things are running. 

//Non-blocking callback hell.
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR! 💥')
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//         console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
//             console.log('Your new file has been written 💨');
//             });
//         });
//     });
// });
// console.log('Will read file!');

////////////////////////////////////////

//SERVER
const server = http.createServer((req, res) => {
    console.log(req.url)

    const pathName = req.url;

    if(pathName ==='/' || pathName === '/overview'){
        res.end('Hello from the OVERVIEW');
    }else if(pathName === '/product'){
        res.end('This is the product');
    }else {
        res.writeHead(404, { //must set headers BEFORE sending response!
            'Content-type': 'text/html',
            'my-own-header': 'Hello-World'
        })
        res.end('<h1>Page NOT found!</h1>');
    }

    // res.end('Hello from the server');   //simplist way to send back a simple response
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening for requests on port 8000');
});
