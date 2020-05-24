let express = require('express');
let app = express();

let handlebars = require('express-handlebars');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('port', 4825);

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
app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(app.get('port'), function() {
	console.log('Connection established. Ctrl-C to terminate...');
});
