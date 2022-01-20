import express from 'express'
import CreateUser from './controllers/authController';
import LoginIn from './controllers/authLoginIn';
import CreateEvent from './Routes/eventCreate';

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'hello world with Typescript' })
})
app.use('/auth', CreateUser);

app.use('/auth', LoginIn);

app.use('/create', CreateEvent);

app.listen(3000, () => console.log('Server is running'))