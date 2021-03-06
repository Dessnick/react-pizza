const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((acc, obj) => obj.price + acc, 0);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: allPizzas.length,
      };
    }

    default:
      return state;
  }
};

export default pizzas;
