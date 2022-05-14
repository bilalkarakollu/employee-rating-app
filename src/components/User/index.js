import React from 'react'
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setPuan } from '../../features/userSlice';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setPuan(user.id))
    }

    return (
        <li>
            <Link to={`/user/${user.id}`}>
                <div className='user-card'>
                    <div className='user-img'>
                        <img src={user.resim} alt={user.ad} />
                    </div>
                    <div className='user-body'>
                        <h3>{user.ad} {user.soyad}</h3>
                        <p className='user-mail'>{user.mail}</p>
                        <p className='user-gorev'>{user.gorev}</p>
                        <p className='user-gorev'>{user.puan}</p>
                    </div>
                    <div className='user-footer'>
                        <button onClick={handleClick} className='user-oyla-btn'>+</button>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default User

User.propTypes = {
    user: PropTypes.object,
    puanVer: PropTypes.func
};