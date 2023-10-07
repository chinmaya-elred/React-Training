const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretKey = 'your_secret_key';

app.post('/login', (req, res) => {
 const { username, password } = req.body;

 if (username === 'login' && password === 'password') {
   const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
   res.json({ token });
 } else {
   res.status(401).json({ error: 'Invalid credentials' });
 }
});

app.listen(5000, () => {
 console.log('Server is running on http://localhost:3000');
});
