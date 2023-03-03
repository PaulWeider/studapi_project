import React from 'react'
import { Link } from 'react-router-dom'
import './First_step.css'
import { Routes } from 'react-router-dom'
import './First_step.css'
import { Route} from 'react-router-dom'
import LoginForma from '../LoginForma';
import LoginForma_admin from '../LoginForma_admin';
const First_step = () => {
  return (
    <div>
    <h1>Выбор регистрацыи</h1>
    <div className='ves_ul'>
      <ul>
        <li>
        <a className='alll'  href = '/student'>Студент</a>
        </li>
        <li>
        <a className='alll' href="/step_for_admin">Админ</a>
        </li>
      </ul>

      </div>
    </div>
  )
}

export default First_step
