import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Feed from './Feed'
import Login from './Login'
 const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/feed' element={<Feed/>}/>
</Routes>
  )
}
export default AllRoutes
