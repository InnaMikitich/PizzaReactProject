import { createSlice, configureStore } from '@reduxjs/toolkit';

const counter= createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }, 
      //setValue: (state, action) => {
        //state.value = action.payload
     // }
    }
  })

export const { incremented, decremented, setValue } = counter.actions;
  const store = configureStore(
   {reducer: counter.reducer}
  )
 
  export default store;
