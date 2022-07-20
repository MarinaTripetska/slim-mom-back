const notRecommendedProducts = (products, bloodType) => {
  const notRecommendedProductsList = products
    .filter((product) => product.groupBloodNotAllowed[bloodType] === true)
    .map((product) => product.categories[0])
    .filter((val, ind, arr) => arr.indexOf(val) === ind);
  return notRecommendedProductsList;
};

module.exports = notRecommendedProducts;
