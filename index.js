const { port } = require('./config/config')
var cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(cors())
/* HTTP request logger middleware */
app.use(morgan('tiny'))
app.use(routes)
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})