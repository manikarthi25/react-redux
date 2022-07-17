//JavaScript Application

const redux = require('redux')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

console.log("Node - Redux");

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICEGREAM = 'BUY_ICEGREAM';

//Create Action
function buyCake() {
    return{
        type:BUY_CAKE
    }
}

const buyIceGream = () => {
    return{
        type:BUY_ICEGREAM
    }
}

const cakeShopInitialState = {
    noOfCakes: 10
}


const iceGreamInitialState = {
    noOfIceGreams: 5
}
console.log(cakeShopInitialState);
console.log(iceGreamInitialState);

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
const iceGreamShopReducer= (state = iceGreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICEGREAM:
            return {
                ...state,
                noOfIceGream: state.noOfIceGream - 1
            } 
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    cakeShop : cakeShopReducer,
    iceGream : iceGreamShopReducer
});

//Create Store
const store = createStore(rootReducers, applyMiddleware)
console.log("Initial State :" +store.getState())
const unsubscribe = store.subscribe(() => console.log("Update State :" +store.getState()))

store.dispatch(buyCake);
store.dispatch(buyIceGream);
unsubscribe()