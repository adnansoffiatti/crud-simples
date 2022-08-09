const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// banco fake
const cursos = ['php', 'node', 'python'];

// listar todos os cursos
app.get('/cursos', (req, res) => {
  return res.json(cursos);
});

// listar um cursos
app.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});

// criar um curso
app.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.json(cursos);
});

// atualizar cursos
app.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  cursos[index] = name;
  return res.json(cursos);
});

// deletar cursos
app.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({ message: 'Curso deletado!' }); 
})

app.listen(port, () => console.log(`Servidor rodando na porta ${3000}`));