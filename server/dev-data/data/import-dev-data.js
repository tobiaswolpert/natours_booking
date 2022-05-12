const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../../config.env" });
const fs = require("fs");
const Tour = require("../../model/tourModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//Connect to the database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

//Read JSON file
const tours = JSON.parse(fs.readFileSync("tours.json", "utf-8"));

//Import data into database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete all data from collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
