const express = require("express");
const morgan = require("morgan");
const app = express();
var bodyParser = require("body-parser");
let cors = require("cors");

process.env.PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/index"));


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
