const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())

app.get('/', (req, res) => res.send('All good in hood!').status(200))
app.use('/sample-route', require('./routes/sample-route'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
