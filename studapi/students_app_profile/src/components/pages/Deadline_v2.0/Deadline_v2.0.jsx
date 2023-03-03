import React from 'react'
import { useState, useEffect } from 'react'
import './Deadline_v2.0.css'

const Deadline_v2 = () => {

    const [cards] = useState([
        {
        title: 'Предмет: такой-то',
        text: 'Задание: такой то',
        text2:'Кабинет: такой то',
        data: "Data: 05.05.2023",
        },
        {
            title: 'Предмет: такой-то',
            text: 'Задание: такой то',
            text2:'Кабинет: такой то',
            data: "Data: 05.05.2023",
            },
            {
                title: 'Предмет: такой-то',
                text: 'Задание: такой то',
                text2:'Кабинет: такой то',
                data: "Data: 05.05.2023",
                },
                {
                    title: 'Предмет: такой-то',
                    text: 'Задание: такой то',
                    text2:'Кабинет: такой то',
                    data: "Data: 05.05.2023",
                    },
                    {
                        title: 'Предмет: такой-то',
                        text: 'Задание: такой то',
                        text2:'Кабинет: такой то',
                        data: "Data: 05.05.2023",
                        },
                        {
                            title: 'Предмет: такой-то',
                            text: 'Задание: такой то',
                            text2:'Кабинет: такой то',
                            data: "Data: 05.05.2023",
                            },
    ])

  return (
    <div>
     <section>
        <div className='containe'>
        <h1>Responsoi Cards</h1>
        <div className='cards'>
        {
            cards.map((card,i)=>(
                 <div key={i} className='card'>
                 <h3>
                    {card.title}
                 </h3>
                  <p>
                    {card.text}
                     </p> 
                     <p>
                    {card.text2}
                     </p> 
                     <input type="checkbox"/>Сделано:
                     <p>{card.data}</p>
                     <button className='btn'>Done</button>
         </div> 
            )) }
        </div>
        </div>
     </section>
    </div>
  )
}

export default Deadline_v2
