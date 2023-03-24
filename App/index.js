const express = require('express')

const app = express()
const users = []

app.listen('3000')

//middleware
app.use(express.json())

//get
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
  
    if (!user) {
    res.set('Status-Code', 404)
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    
    res.set('Status-Code', 200)
    res.json(user);
});

//post
app.post('/users', (req, res) => {
    const { nome, sobrenome, idade } = req.body;
  
    const newUser = {
        id: users.length + 1,
        nome,
        sobrenome,
        idade
    };
  
    users.push(newUser);
    res.set('Status-Code', 200)
    res.json(newUser);
});

//put

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade } = req.body;
  
    const user = users.find(u => u.id == id);
    const index = users.findIndex(u => u.id == id);
  
    if (!user) {
        res.set('Status-Code', 404)
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  
    updatedUser = {
        id: user.id,
        nome,
        sobrenome,
        idade,
    }

    users[index] = updatedUser

    res.set('Status-Code', 200)
    res.json(users[index]);
  });

//delete
app.delete('/users/:id', (req, res) => {
    const { id }= req.params;
    const user = users.find(u => u.id == id);
    const index = users.findIndex(u => u.id == id);
  
    if (!user) {
        res.set('Status-Code', 404)
        return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
  
    users.splice(index, 1);
    res.set('Status-Code', 204)
    res.status(204).end();
});

//patch
app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade } = req.body;
  
    const user = users.find(u => u.id == id);
    const index = users.findIndex(u => u.id == id);
  
    if (!user) {
        res.set('Status-Code', 404)
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  
    const updatedUser = {
        id: user.id,
        nome: nome || user.nome,
        sobrenome: sobrenome || user.sobrenome,
        idade: idade || user.idade,
    };
  
    users[index] = updatedUser;

    res.set('Status-Code', 200)
    res.json(users[index]);
});

//options
app.options('/users/:id', (req, res) => {
    res.set('Allow', 'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.set('Status-Code', 204)
    res.status(204).end();
});

//head
app.head('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
  
    if (!user) {
        res.set('Status-Code', 404)
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.set('Status-Code', 200)
    res.status().end();
});