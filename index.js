const express = require('express');
const path = require('path');
const gptRoutes = require('./src/routes/gptRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const authRoutes = require('./src/routes/authRoutes');
const bodyParser = require('express');
require('dotenv').config();


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/gpt', gptRoutes);

console.log(`API Key: ${process.env.API_KEY}`);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));