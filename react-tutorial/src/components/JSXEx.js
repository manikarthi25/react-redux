import React from 'react';

const JSXEx = () => {
    return(
        React.createElement('div', {id: "givenId", className: "givenClassName"}, React.createElement('h1', null , "JSX Example"))
    )
}
export default JSXEx;