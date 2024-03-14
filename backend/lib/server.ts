import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './articles';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.use('/articles', router)

app.listen(1234, () => {
  console.log('Server started on port 1234')
})