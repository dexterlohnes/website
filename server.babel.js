import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

// TODO: Setup reducers

const port = process.env.PORT || 8080;

let app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', path.join(process.cwd(), 'src', 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// TODO: Load server routes

app.get('*', (req, res, next) => {
    res.render('index', {});
});

app.listen(port, () => {
    console.log(`Node.js app is running at http://localhost:${port}/`);
});
