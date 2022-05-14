import React from 'react';
import PropTypes from 'prop-types';
import User from '../User'

const UserList = ({ users }) => {

    return (
        <div className='card-list'>
            <ul>
                {users.map(user => (<User key={Number(user.id)} user={user} />))}
            </ul>
        </div>
    )
}

export default UserList


UserList.propTypes = {
    users: PropTypes.array
};