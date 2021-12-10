const express = require("express");
const fetch = require("node-fetch");
const app = express();
const { handleSearchListData } = require("../utils/utils");

const SEARCH_END_POINT = "https://api.mercadolibre.com/sites/MLA/search?q=:";

app.get("/search", (req, res) => {
  const queryParameter = req.query;
  let url = `${SEARCH_END_POINT}/${queryParameter.item}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let transformedData = handleSearchListData(data);
      res.send(transformedData);
    });
});

module.exports = app;
