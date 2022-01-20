import express from 'express'
import CreateUser from './controllers/authController';
import LoginIn from './controllers/authLoginIn';
import CreateEvent from './Routes/eventCreate';
import EventList from './Routes/eventList';

const app = express();
app.use(express.json())

app.use('/auth', CreateUser);

app.use('/auth', LoginIn);

app.use('/create', CreateEvent);

app.use('/list', EventList)

app.listen(3000, () => console.log('Server is running'))