import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function Navbar(){
    
    return  (

     <nav className="nav"> 
        <a href="/" className="site-title">App for students</a>
        <ul>
            <li className='active'>
                <a href="/schedule">Рассписание</a>
                </li>
                {/* <li>
                <a href="/deadline">Дедлайн</a>
            </li>  */}
            {/* <li>
                <a href="/deadline_v2.0">Дедлайн</a>
            </li>  */}
            <li>
                <a href="/deadlinever3">Дедлайн ver3</a>
            </li> 
            <li>
            <a href=" https://t.me/StudHellBot" className="nav-link d-inline" target="_blank" rel="noopener noreferrer">Telega</a>
            </li> 
{/* 
            <li>
                <a href="/login_an_rgistert-admin">логин и регистация - админ</a>
            </li> 
            <li>
                <a href="/login_an_rgistert-student">логин и регистация - студент</a>
            </li>  */}
{/* 
            <li>
                <a href="/marks">Оценки</a>
            </li> 
              */}
        </ul>
      
    </nav>
    )
}