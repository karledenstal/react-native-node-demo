import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(1234, () => {
  console.log('Server started on port 1234')
})