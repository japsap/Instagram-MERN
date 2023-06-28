import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Routes/Login';
import UserProfile from './Routes/UserRelated/UserProfile';
import UserFeed from './Routes/UserRelated/UserFeed'

import useAuth from './Hooks/useAuth';

const App = () => {

  const [ user ] = useAuth();

  console.log(user)
  return (
    <div>
      <Sidebar/>
      <Routes>
        { user ? <Route path='/' element={<UserFeed user={user}/>}/> : <Route path='/' element={<Login user={user}/>}/>}
        { user ? <Route path='/:userId' element={<UserProfile user={user}/>}/> : <Route path='/:userId' element={<Login user={user}/>}/>}
      </Routes>
    </div>
  )
}

export default App