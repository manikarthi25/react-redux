//JavaScript Application

const redux = require('redux')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

console.log("Node - Redux");

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//Create Action
function buyCake() {
    return{
        type:BUY_CAKE
    }
}

const buyIceCream = () => {
    return{
        type:BUY_ICECREAM
    }
}

const cakeShopInitialState = {
    noOfCakes: 10
}


const iceCreamInitialState = {
    noOfIceCreams: 5
}
console.log(cakeShopInitialState);
console.log(iceCreamInitialState);

//Create Reducer
const cakeShopReducer = (state = cakeShopInitialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            } 
        default:
            return state;
    }
}
const iceCreamShopReducer= (state = iceCreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            } 
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    cakeShop : cakeShopReducer,
    iceCream : iceCreamShopReducer
});

//Create Store
const store = createStore(rootReducers, applyMiddleware)
console.log("Initial State :" +store.getState())
const unsubscribe = store.subscribe(() => console.log("Update State :" +store.getState()))

store.dispatch(buyCake);
store.dispatch(buyIceCream);
unsubscribe()