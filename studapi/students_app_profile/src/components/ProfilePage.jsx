import React, { useEffect, useState } from 'react';
import Profile from './Profile'
import Navbar from './Navbar/Navbar.js'
import { Route,Routes } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Schedule from './pages/Shedule/Schedule';
import About from '../components/pages/Deadline/About'
import Deadline from './pages/Deadline/Deadline';
import Forum from './pages/Forum/Forum';
import Deadline_v2 from './pages/Deadline_v2.0/Deadline_v2.0';
import LoginForma from './Login_and_Register/LoginForma';
import LoginForma_admin from './Login_and_Register/LoginForma_admin';
import First_step from './Login_and_Register/First_step/First_step';
import GetDeadline from './pages/Deadlinever3/Deadlinever3'




const ProfilePage = () => {


const [deadine, setDeadline] = useState([]);
useEffect(() =>{
  async function fetchDeadline(){
    try{
      const requeUrl = 'http://127.0.0.1:8000/deadline_v2.0/?requestTasks';
      const reponse = await fetch(requeUrl);
      const reponseJSON = await reponse.json();
      console.log(reponseJSON);
      setDeadline(reponseJSON);
    }
    catch{

    }
  }
  fetchDeadline();
}, []); 

    
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
        <Route path = "/" element = {<Profile/>}/>
        <Route path = "/schedule" element = {<Schedule/>}/>
        {/* <Route path = "/deadline" element = {<Deadline/>}/> */}
        {/* <Route path = "/deadline_v2.0" element = {<Deadline_v2/>}/> */}
        <Route path = "/deadlinever3" element = {<GetDeadline deadine={deadine}/>}/>
        {/* <Route path = "/login_an_rgistert-admin" element = {<LoginForma_admin/>}/>
        <Route path = "/login_an_rgistert-student" element = {<LoginForma/>}/> */}
        {/* <Route path = "/marks" element = {<Forum/>}/> */}
        <Route path='/telegram' component={() => {
                    window.location.href = ' https://t.me/StudHellBot'
                }}/>
    </Routes>
    </div>
       
       </>
  )
}

export default ProfilePage
