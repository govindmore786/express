const express = require('express')
const path = require('path')
const app = express()

var {create} = require('express-handlebars');
const port = 3000
const hbs = create({ extname: '.handlebars' }); 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blog.js')))
app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})