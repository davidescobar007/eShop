const express = require("express");
const fetch = require("node-fetch");
const app = express();
const { handleItem } = require("../utils/utils");

const ITEM_END_POINT = "https://api.mercadolibre.com/items/";

app.get("/item", (req, res) => {
  const queryParameter = req.query;
  let url = `${ITEM_END_POINT}/${queryParameter.id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fetch(`${url}/description`)
        .then((responseData) => responseData.json())
        .then((description) => {
          let newItem = handleItem(data, description);
          res.send(newItem);
        });
    });
});

module.exports = app;
