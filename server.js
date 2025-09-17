require("dotenv").config({ path: __dirname + "/.env" });
console.log("MONGO_URI from env:", process.env.MONGO_URI); // debug

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/profile', require('./routes/profile'));

app.get('/', (req, res) => res.send('Blog backend running'));

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5001; // change 5000 to 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
