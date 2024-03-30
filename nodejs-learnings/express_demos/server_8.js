const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app_14");

console.log(app.get("env")); // env is aleays development unless you do export NODE_ENV=dev

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log(`DB is ${DB}`);

// When the strict option is set to true, Mongoose will ensure that only the
// fields that are specified in your schema will be saved in the database,
// and all other fields will not be saved (if some other fields are sent).

(
  async() =>{
    await mongoose.connect(DB)
  }
)();


// Schema for fruits

const fruitSchema = new mongoose.Schema({
  fruitName: {
    type: String,
    required: [true, "fruitName is required"],
    unique: true,
  },
  from: String,
  nutrients: String,
  price: {
    type: Number,
    required: [true, "price of fruit is required"],
  },
  organic: Boolean,
  description: String
});

// convention is to start with Caps
const FruitModel = mongoose.model('Fruit', fruitSchema);

// Now create object out of model above
const testFruit = new FruitModel({
  fruitName: 'orange',
  from: 'Nagpur',
  nutrients: 'Vitamin C',
  price: 100,
  organic: false,
  description: 'test fruid'
});

// finally save to DB
(async() =>{

    const doc = await testFruit.save()
    console.log(`doc saved is ${doc}`)

})();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
