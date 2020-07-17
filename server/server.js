
const app = require('./app');
const config = require('config');
const mongoose = require('mongoose');



const DB = config.get('DB.URI').replace('<PASSWORD>', config.get('DB.PASSWORD'));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDB connected`));

const PORT = process.env.PORT || config.get('PORT') || 3000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
