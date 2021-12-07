const express = require("express");
const morgan = require("morgan");
const app = express();
var bodyParser = require("body-parser");

process.env.PORT = process.env.PORT || 5000;
const DATA_BASE_URL =
  "mongodb+srv://david:david007@cluster0.pwkrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/index"));


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
