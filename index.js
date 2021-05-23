const { port } = require('./config/config')
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes/routes')
const app = express()

/* HTTP request logger middleware */
app.use(morgan('tiny'))

app.use(routes)

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})