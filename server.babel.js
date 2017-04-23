import express from 'express'
import React from 'react'
import path from 'path'

// import routes from './src/routes'
import {assetMiddleware, renderHTMLString} from './tools/server-tools'

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

function renderHtml(req,res) {
    // renderHTMLString(routes, req, (error, redirectLocation, html) => {
    //     if (error && error.message === 'Not found') {
    //         res.status(404).send(error.message);
    //     }
        // else if (error) {
        //     res.status(500).send(error.message);
        // }
        // else if (redirectLocation) {
        //     res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        // } else {
            res.render('index', {
                // content: html,
                node_env: process.env.NODE_ENV
            });
    //     }
    // });
}

app.get('*', assetMiddleware(),(req, res) => {
    renderHtml(req, res);
});


app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`)
})
