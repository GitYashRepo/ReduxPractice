const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10,
}

const createSlice = createSlice({
      name: 'cake',
      initialState,
      reducers: {
         oredered : (state) => {
            state.numOfCakes--
         },
         restocked : (state, action) => {
            state.numOfCakes += action.payload;
         },
      },
});


module.exports = createSlice.reducers
module.exports.cakeActions = createSlice.actions
