const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const userroute = require('./routes/userroute')

app.use(express.json())

app.use('/api/user', userroute)

app.get('/', (req, res) => {
  res.send('WELCOME TO MY API!')
})

// mongodb+srv://dicklee:<password>@cluster0.lznlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// router.post('/signup', (req, res) =>{

// })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})