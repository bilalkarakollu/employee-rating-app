import React from 'react'
import { Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home';
import User from './pages/User';

//components
import Loading from './components/Loading';
import Error from './components/Error';

import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './apollo/queries'

import { useDispatch } from 'react-redux'
import { setUser } from './features/userSlice';


const App = () => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <Loading/>;
  if (error) return <Error/>;
  if(data){
    dispatch(setUser(data.users));
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

