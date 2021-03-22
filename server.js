const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB 
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/everything123", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// Add routes, both API and view
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
