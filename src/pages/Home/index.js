import React from 'react'
import UserList from '../../components/UserList';

import { useSelector } from 'react-redux'

const Home = () => {

  const users = useSelector(state => state.users.users);

  return (
    <div className='card-row'>
      <UserList users={users}/>
    </div>
  )
}

export default Home
