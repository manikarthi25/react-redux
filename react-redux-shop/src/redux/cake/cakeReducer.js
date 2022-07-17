import { BUY_CAKE } from "./cakeTypes"

const cakeInitialState = {
    numOfCakes: 10
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state;
    }
}
export default cakeReducer