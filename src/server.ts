import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(morgan('dev')); // console logs time and size for the api response
app.use(express.json()); // allows client to send json
app.use(express.urlencoded({extended: true})); // put query into object for you

app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({message: 'hello'});
});

app.use('/api', protect, router);

app.post('/user', createNewUser);
app.post('/signin', signin)

export default app;