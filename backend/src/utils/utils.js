let newObject = {
  author: { name: "J David", lastname: "Escobar" },
  results: [],
  categories: [],
};

const handleCategoryList = (rowData) => {
  let breadCrumb = [];
  let categories = rowData.filter((item) => item.name === "Categorías");
  let categoryList = categories[0]?.values[0]?.path_from_root || [];
  categoryList.forEach((item) => {
    breadCrumb.push(item.name);
  });
  newObject.categories = breadCrumb;
};

const handleSearchListData = (data) => {
  handleCategoryList(data.filters);
  data.results.forEach((item) => {
    let newObj = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 00,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
    newObject.results.push(newObj);
  });
  return newObject;
};

const handleItem = (item, description) => {
  delete newObject.categories;
  delete newObject.results;
  newObject.item = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: null,
    },
    picture: item.picture,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
  };
  return newObject;
};

module.exports = { handleSearchListData, handleItem };
