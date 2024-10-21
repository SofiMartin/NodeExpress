import express from 'express';

const app =  express();
const port = 3000;

app.get('/user/:id',  (req, res) => {
    const userId = req.params.id;
    console.log(`ID del Usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

app.listen(PORT,  () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


