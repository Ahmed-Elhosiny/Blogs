const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

const app = require('./app');

// Register view engine
app.set('view engine', 'ejs');

// Connect to Database
const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connected successfully...');
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`ERROR 💥 : ${err}`);
  });
