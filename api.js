const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/data-hora', (req, res) => {
    const agora = new Date();

    res.json({
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.toLocaleTimeString('pt-BR')
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 