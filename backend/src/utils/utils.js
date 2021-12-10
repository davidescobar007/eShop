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
  return breadCrumb;
};

const handleSearchListData = (data) => {
  let newObjCopy = {
    author: { name: "J David", lastname: "Escobar" },
    results: [],
    categories: handleCategoryList(data.filters),
  };
  data.results.forEach((item) => {
    if (newObjCopy.results.length < 4) {
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
      newObjCopy.results.push(newObj);
    }
  });
  return newObjCopy;
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
    picture: item.pictures,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
  };
  return newObject;
};

module.exports = { handleSearchListData, handleItem };
