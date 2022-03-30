export const compositeFilter =
  (state, ...filterFunctions) =>
  (products) => {
    // console.log(products);
    return filterFunctions.reduce(
      (acc, currFunction) => currFunction(state, acc),
      products
    );
  };

export const filterRatings = (state, products) => {
  // console.log("inside", products);
  const temp =
    state.ratings === 0
      ? products
      : products.filter(({ ratings }) => ratings >= state.ratings);
  // console.log("temp", temp);
  return temp;
};

export const filterPrice = (state, products) => {
  // console.log("inside", products);
  const temp =
    state.price.min === 0 && state.price.max === 5000
      ? products
      : products.filter(
          ({ discountedPrice }) =>
            discountedPrice >= state.price.min &&
            discountedPrice <= state.price.max
        );
  // console.log("temp", temp);
  return temp;
};

export const filterCategories = (state, products) => {
  // console.log("inside", products);
  const temp = Object.values(state.categories).every((v) => v === false)
    ? products
    : products.filter(({ categoryName }) => state.categories[categoryName]);
  // console.log("temp", temp);
  return temp;
};

export const sortByPrice = (state, products) => {
  switch (state.sort.order) {
    case "LOWEST-FIRST":
      return [...products].sort(
        (prev, curr) => prev.discountedPrice - curr.discountedPrice
      );
    case "HIGHEST-FIRST":
      return [...products].sort(
        (prev, curr) => curr.discountedPrice - prev.discountedPrice
      );
    default:
      return products;
  }
};

export const sortProducts = (state, products) => {
  // console.log("inside", products);
  switch (state.sort.sortBy) {
    case "price":
      const temp = sortByPrice(state, products);
      // console.log("temp", temp);

      return temp;
    default:
      return products;
  }
};
