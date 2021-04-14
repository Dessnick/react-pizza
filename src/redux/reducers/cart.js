const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (coll) => coll.reduce((acc, obj) => obj.price + acc, 0);

// const getTotalSum = (obj, key) => {
//   const arrKeys = key.split('.');
//   return Object.keys(obj).reduce((acc, key) => {
//     const item = obj[key];
//     const value = item.items.length + acc;
//     return acc;
//   }, 0);
// };

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      // const newCartItems = [...state.items];
      // const { id, type, size } = action.payload;
      // const addedPizzaItem = { [id]: { [type]: { [size]: action.payload } } };
      // newCartItems.push(addedPizzaItem);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: allPizzas.length,
      };
    }

    case 'REMOVE_FROM_CART':
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };

    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default pizzas;
