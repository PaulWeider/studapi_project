import React from 'react'
import { Routes } from 'react-router-dom'
import './First_step.css'
import { Route} from 'react-router-dom'
import LoginForma from '../LoginForma';
import LoginForma_admin from '../LoginForma_admin';
const First_step = () => {
  return (
    <div>
    
     <Routes>
      <Route path = "/student" element = {<LoginForma/>}/>
      <Route path = "*/step_for_admin" element = {<LoginForma_admin/>}/>
     </Routes>
    </div>
  )
}

export default First_step
