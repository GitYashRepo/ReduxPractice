const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;

console.log('InitialState',store.getState());

const unSubscribe = store.subscribe(() => {
    console.log('Updated State',store.getState())
});

store.dispatch(cakeActions.oredered());
store.dispatch(cakeActions.oredered());
store.dispatch(cakeActions.oredered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.oredered());
store.dispatch(iceCreamActions.oredered());
store.dispatch(iceCreamActions.oredered());
store.dispatch(iceCreamActions.restocked(3));

unSubscribe();
