import express from 'express';

//Crear una instancia express
const app = express();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//Ruta básica
app.get('/', (req, res) => {
        res.send('Hola, mundo');
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

//Ruta GET para el Home
app.get('/', (req, res) => {
    res.send('Bienvenido a mi sitio web');
});

//Ruta GET para recibir datos simples
app.get('/data', (req, res) => {
    res.send('Datos recibidos');
});

//Ruta GET con parámetro de ruta
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
});

//Ruta GET con múltiples parámetros
app.get('/product/:category/:id', (req, res) => {
    const { category, id}  = req.params;
    res.send(`Categoria:  ${category} - ID del producto: ${id}`);
});

//Ruta GET con parámetro de consulta
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultados de busqueda para : ${query}`);
});

//Ruta GET con multiples parametros de consulta
app.get('/filter',  (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrar por tipo:  ${type} - Rango de precio: ${minPrice} - ${maxPrice}`);
});

