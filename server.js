let express = require('express');
let app = express();

let handlebars = require('express-handlebars');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var port = process.env.PORT || 4825;

var path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/blog', (req, res) => {
	res.render('blog');
});

app.get('contact', (req, res) => {
	res.render('form');
});

app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Connection established to port ' + port + '. Ctrl-C to terminate...');
});
