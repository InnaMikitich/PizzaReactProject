import axios from 'axios';

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
};  */

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));

    const API_BASE_URL = 'https://pizzas-gc9v0eu2r-inna-mikitichs-projects.vercel.app/';
    const url = `${API_BASE_URL}/pizzas?${
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
}); 



/*
  const baseUrl = 'http://192.168.31.211:3001'; 

  const url = `${baseUrl}/pizzas?${
    category !== null ? `category=${category}&` : ''
  }_sort=${sortBy.type}&_order=${sortBy.order}`;

  console.log("Запрос к API:", url); */


