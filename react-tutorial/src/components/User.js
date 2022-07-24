import React from 'react';

function User({userDetails}) {
    return (
        <div>
            <h3>{userDetails.name}</h3>
        </div>
    );
}

export default User;