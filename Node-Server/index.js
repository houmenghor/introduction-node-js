const http = require('http');
const hostname = 'localhost';
const port = 4000;

const server = http.createServer(
    (request, Response) =>{
        // console.log(request.url);
        // console.log(request.method);
        // console.log(request.url.split('/')[3].split('?')[0]);
        // console.log(request.url.split('?')[1]);
        // url, endpoint
        const requestUrl = request.url;
        const requestParam = requestUrl.split('/')[2];
        const requestMethod = request.method.toLocaleUpperCase();
        console.log(requestParam);
        // get request body or payload
        request.on('data', (data) =>{
            console.log(data.toString());
        })

        request.on('end', ()=>{
            if(requestUrl == '/user/getUsers' && requestMethod == 'GET'){
                Response.setHeader('Content-Type', 'text/plain');
                Response.end("get all users");
            }else if(requestUrl.startsWith('user/getUserByID') && requestMethod == )
        })

    }
)

server.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
}) 