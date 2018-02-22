require('babel-register')({
    presets: ['react', 'es2015', 'stage-0']
});
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const routes = require('./routes/routes');

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/dist'));

app.use('/', routes);

app.listen(3000, () => {
    console.log('server running @ 3000');
});

