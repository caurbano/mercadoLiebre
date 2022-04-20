const express = require('express');
const path = require('path'); //poder unificar las rutas dtro de los dist sist. operativos

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
//decirle a express que queremos tener la carpeta public como recurso de arch estaticos para poder consumirlos

// app.listen(3000, () => {
//     console.log('Servidor corriendo en el puerto 3000');
// });

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});