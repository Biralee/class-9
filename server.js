const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const userroute = require('./routes/userroute')
const db = require('./config/db')
db()
app.use(express.json())

app.use('/api/user', userroute)

app.get('/', (req, res) => {
  res.send('WELCOME TO MY API!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})