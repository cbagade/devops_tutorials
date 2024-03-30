const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'});
const app = require('./app_14');

console.log(app.get('env')); // env is aleays development unless you do export NODE_ENV=dev

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
console.log(`DB is ${DB}`);



(
  async() =>{
    const con = await mongoose.connect(DB)
    console.log(con.connection)
  }
)();



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});