import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() =>props.sendDataToParent('Child')}>Call Parent Component method from Child Component</button>
        </div>
    );
}

export default ChildComponent