const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const DB = config.get('DB.URI').replace('<PASSWORD>', config.get('DB.PASSWORD'));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDB connected`));

if (config.get('NODE_ENV') === 'development' || process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth.routes');
const bookRoutes = require('./routes/book.routes');
const userRoutes = require('./routes/user.routes');
const globalErrorHandler = require('./controllers/error.controller');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes)
app.use(globalErrorHandler);

const PORT = process.env.PORT || config.get('PORT') || 3000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
