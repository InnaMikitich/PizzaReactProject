/*import axios from 'axios';

export const setLoaded = (payload) => ({
type: 'SET_LOADED',
payload
})

/*
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
     axios.get(`http://localhost:3001/pizzas?${
    category !== null ? `category=${category}` : ''
        }&_sort=${sortBy}&_order=desc`).then(({ data }) => {
         dispatch(setPizzas(data));
      });
}; 
/*
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    
    const url = `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`;

    console.log("Запрос к API:", url); 

    axios.get(url)
        .then(({ data }) => {
            dispatch(setPizzas(data));
        })
        .catch((error) => {
            console.error("Ошибка при загрузке пицц:", error); 
            alert("Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже."); // Уведомляем пользователя
        });
};


export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
}); */

import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
});


export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));


  const baseUrl = 'http://192.168.31.211:3001'; 

  const url = `${baseUrl}/pizzas?${
    category !== null ? `category=${category}&` : ''
  }_sort=${sortBy.type}&_order=${sortBy.order}`;

  console.log("Запрос к API:", url);

  axios.get(url)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch((error) => {
      console.error("Ошибка при загрузке пицц:", error);
      alert("Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.");
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

