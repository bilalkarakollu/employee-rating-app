import React from 'react'
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setPuan } from '../../features/userSlice';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setPuan(user.id))
    }

    return (
        <li>
            <Link to={`/user/${user.id}`}>
                <div className='user-card'>
                    <div className='card-img'>
                        <img src={user.resim} alt={user.ad} />
                    </div>
                    <div className='card-body'>
                        <h3 className='card-ad'>{user.ad} {user.soyad}</h3>
                        <p className='card-mail'>{user.mail}</p>
                        <p className='card-gorev'>{user.gorev}</p>
                        <p className='card-puan'>Puan: {user.puan}</p>
                        <div className='card-btn'>
                            <button className='btn' onClick={handleClick}>+</button>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default User

User.propTypes = {
    user: PropTypes.object
};