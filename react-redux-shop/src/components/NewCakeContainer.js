import { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

import React from 'react';

function NewCakeContainer(props) {

    const [number, setNumber] = useState(1);

    return (
        <div>
            <h1>Remaining Number of cakes : </h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer);
