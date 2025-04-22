const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(__dirname + '/public'));

// Rota principal
app.get('/', (req, res) => {
  res.render('home', { titulo: 'Página Inicial' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
