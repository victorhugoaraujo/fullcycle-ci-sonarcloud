const express = require("express");
const soma = require("./soma");

const PORT = 3000;
const app = express();

// Rota padrão
app.get("/", (req, res) => {
  const result = soma(3, 7);
  res.send(`A o resultado é ${result}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
