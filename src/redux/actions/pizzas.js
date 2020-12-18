import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  console.log(category, sortBy);
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};
