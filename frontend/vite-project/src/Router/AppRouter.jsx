import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import ServiceSteper from '../components/service_steper/ServiceSteper'
import AdminPanel from '../components/Admin/AdminPanel'
import { Context } from '../App'
import AuthAdmin from '../components/Admin/Auth/AuthAdmin'

const AppRouter = () => {
 
  const { logInfo } = useContext(Context);

  return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/service' element={<ServiceSteper />} />
         <Route path='/admin' element={logInfo?.isLoggedIn ? <AdminPanel /> : <AuthAdmin />} />
       </Routes> 
     </BrowserRouter>
  )
}

export default AppRouter