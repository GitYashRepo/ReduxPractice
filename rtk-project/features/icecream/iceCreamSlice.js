const { createSlice } = require('@reduxjs/toolkit');
const { ordered: cakeOrdered } = require('../cake/cakeSlice').cakeActions;

const initialState = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
      name: 'iceCream',
      initialState,
      reducers: {
         ordered : (state) => {
            state.numOfIceCreams--
         },
         restocked : (state, action) => {
            state.numOfIceCreams += action.payload;
         },
      },
      extraReducers: (builder) => {
          builder.addCase(cakeOrdered, (state) => {
                state.numOfIceCreams--
          });
      }
});


module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
