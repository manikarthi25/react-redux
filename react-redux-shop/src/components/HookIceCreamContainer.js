import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { buyIceCream } from '../redux';

function HookIceCreamContainer(props) {

    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of IceCream : { numOfIceCream } </h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream - Hook</button>
        </div>
    );
}

export default HookIceCreamContainer;