const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const DB = config.get('DB.URI').replace('<PASSWORD>', config.get('DB.PASSWORD'));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true,
    useFindAndModify: false
}).then(() => console.log(`MongoDB connected`))


app.use(express.json());
app.use(cors())

const authRoutes = require('./routes/auth.routes');
const bookRoutes = require('./routes/book.routes');

app.use('/api/auth' , authRoutes);
app.use('/api/books' , bookRoutes)


const PORT = process.env.PORT || config.get('PORT') || 3000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
