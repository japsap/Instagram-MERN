import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Routes/Login';
import UserProfile from './Routes/UserRelated/UserProfile';

const App = () => {

  const [ user, setUser ] = useState(true)
  
  return (
    <div>
      <Sidebar/>
      <Routes>
        { user ? <Route path='/' element={<UserProfile/>}/> : <Route path='/' element={<Login/>}/>}
      </Routes>
    </div>
  )
}

export default App