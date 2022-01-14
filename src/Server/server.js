import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import Home from '../Components/Home'

const app = express()

app.use(express.static('./build/client'))
//que tudo que estiver dentro da pasta passada vai conseguir acessar diretamente

app.get('/',function(req,res){
    const html = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport">
                <title>React no Servidor</title>
            </head>
            <body>
                ${ReactDOM.renderToString(<Home/>)}
                <script src="client.bundle.js"></script>
            </body>
        </html>
`
    
    res.send(html)
})

app.listen(3030, function(){console.log("Servidor está ouvindo na porta 3030")})