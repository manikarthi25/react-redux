import React from 'react';
import User from './User';

function UserList(props) {
    const users = [
        {
            id : 1,
            name : "mani",
            mark : 100
        },
        {
            id : 2,
            name : "Mohith",
            mark : 90
        },
        {
            id : 3,
            name : "Mahith",
            mark : 800
        }
    ]
    return (
        <div>
            {
                users.map(user => <User key ={user.id} userDetails = {user}></User>)
            }
        </div>
    );
}

export default UserList;