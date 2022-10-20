import express from 'express';
import {engine} from 'express-handlebars'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
}));
    
app.use(express.static('public'))

app.get('/', (req, res) => res.render('main', {layout : 'index'}));
app.get('/about', (req, res) => res.render('about', {layout : 'index'}));
app.get('/skateboards', (req, res) => res.send([{}]))
app.get('/continents', (req, res) => res.send([{}]))

app.get('/news/:city', (req, res) => res.send(`this is the news page about ${req.params.city}`));
app.get('/products', (req, res) => res.json({hits:[{},{},{},{},{},{},{},{},{},{},{},{},]}));

app.get('/playlists', (req, res) => res.send(["",""]))
app.get('/liked-songs', (req, res) => res.send())
app.get('/album-art/:album-id', (req, res) => res.send())


app.get('/users/:id', (req, res) => {
    console.log(req.params.id); // 1
    console.log(req.query.query); // name
    res.send("sorry database is offline, try again later")
});
   

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
