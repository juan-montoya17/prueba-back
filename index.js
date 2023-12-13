const express = require('express');
const cors = require('cors');
const { swaggerDocs } = require('./swagger/swagger');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

swaggerDocs(app, PORT);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
