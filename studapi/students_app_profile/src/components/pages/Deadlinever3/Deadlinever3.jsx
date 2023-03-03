import React from 'react'
import { useState, useEffect } from 'react'
import '../Deadline_v2.0/Deadline_v2.0.css'
import PropTypes from 'prop-types'



GetDeadline.propTypes = {
    deadine:PropTypes.array,

};

GetDeadline.defaultProps={
    deadine:[],
};


function GetDeadline(props){
    const {deadine} = props;

    return(
        <div className='containe'>
        <h1> Cards</h1>
        <div className='cards'>
        {deadine.map(post =>(
    
            <div className='card'>
             <p>
             Назва предмету : {post.disciplineId__disc_name}
            </p>
            <p>
            Опис: {post.description}
            </p>
            
        <input type='checkbox' /> Термін виконання: {post.deadline}
           <button className='btn'>Done</button>
          


            </div>
            
        ))}
</div>
        </div>
    )
}

export default GetDeadline     
