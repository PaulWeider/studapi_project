import React from 'react'
import './Card.css'
import Deadline from './Deadline'

const Card = () => {
  return (
    <div className='container-deadline'>

    <div className='card-container'>
        <div className='title'>   
            Предмет такой то: вот этот 
        </div>
        <div className='zadanie'>
                Задание такое: вот такое 
        </div>

        <div className='data'>
                Дата: 05.05.2023
        </div>
        
    </div>
    <div className='card-container'>
        <div className='title'>   
            Предмет такой то: вот этот 
        </div>
        <div className='zadanie'>
                Задание такое: вот такое 
        </div>

        <div className='data'>
                Дата: 05.05.2023
        </div>
        
    </div>
    <div className='card-container'>
        <div className='title'>   
            Предмет такой то: вот этот 
        </div>
        <div className='zadanie'>
                Задание такое: вот такое 
        </div>

        <div className='data'>
                Дата: 05.05.2023
        </div>
        
    </div>
    
    </div>
  )
}

export default Card
