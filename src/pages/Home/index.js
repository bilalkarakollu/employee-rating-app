import React from 'react'
import UserList from '../../components/UserList';

import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar';

const Home = () => {

  const users = useSelector(state => state.users.users);

  return (
   <>
   <Navbar title='Personel Değerlendirme'/>
    <div className='card-row'>
      <UserList users={users}/>
    </div>
   </>
  )
}

export default Home
