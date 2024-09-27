const exp = require("constants");
const express = require("express");
const mongoDB = require("mongoose");
const app = express();
const Port = 3000;

app.use(express.json());

mongoDB
  .connect(
    "mongodb+srv://ahmedsherif:vxrlsXgaFp4BKoAG@firstcluster.aqa08.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err, "Error whitle connecting to MongoDB"));

app.listen(Port, () => {
  console.log(`Server running on port: ${Port}`);
});
