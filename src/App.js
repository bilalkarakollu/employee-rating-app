import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';

import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './apollo/queries'

import { useDispatch } from 'react-redux'
import { setUser } from './features/userSlice';

const App = () => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(data){
    dispatch(setUser(data.users))
  }
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="user/:id" element={<User />} />
    </Routes>
    </>
  )
}

export default App;

