const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();
app.use(express.json({extended: false}));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
