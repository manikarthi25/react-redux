import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';



function UserContainer({ userData }) {
    useEffect(() => {
        fetchUsers()
        console.log(fetchUsers())
    }, [])
    return userData.loading? (<p>Loading</p>) : 
    userData.error?(<p>{userData.error}</p>) :
    (
        <div>
            <h1>User List</h1>
            <div>
                {userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);