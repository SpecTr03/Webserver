const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

//configurando Handlebars para express
app.set('view engine', 'hbs');

//registrando partials
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/' , (req, res) => {
  //Enviando parametros desde el segundo argumento del controlador (nombre y titulo) para el html
  res.render('home', {
    nombre: 'Sebastian Cifuentes Florez',
    titulo: 'Curso de node'
  });
});

app.get('/generic' , (req, res) => {
  res.render('generic', {
    nombre: 'Sebastian Cifuentes Florez',
    titulo: 'Curso de node'
  });
});

app.get('/elements' , (req, res) => {
  res.render('elements', {
    nombre: 'Sebastian Cifuentes Florez',
    titulo: 'Curso de node'
  });
});

//Cuando no se encuentra una ruta, se manda un 404
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
});