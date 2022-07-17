import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>Item : {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemNumber = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCream;

    return {
        item : itemNumber
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItems = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

    return {
        buyItem: buyItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer);