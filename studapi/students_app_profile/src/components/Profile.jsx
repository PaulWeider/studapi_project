import React, { Fragment, useState } from 'react'
import "./Profile.css"
import TableMark from './Table'


const Profile = () => {
const [toggleTab, setToggleTab] = useState(1)
const toggleState = (index) =>{
    setToggleTab(index)
}

  return (
    <Fragment>


    
    <section className='about'>

    <div className='row'>

    <div className='column'>  </div>
    
    <div className='column'>
        <div className='about-img'></div>
    </div>

    <div className='column'>

        <div className='tabs'>

            <div className={ toggleTab === 1 ? 'single-tab active-tab' : 'single-tab'}
            onClick = {() => toggleTab(1)}
            >
            <h2> About </h2>
             </div>

             <div className={ toggleTab === 2 ? 'single-tab active-tab' : 'single-tab'}
               onClick = {() => toggleTab(2)}
             >
            {/* <h2> Skills </h2> */}
             </div>

             <div className={ toggleTab === 3 ? 'single-tab active-tab' : 'single-tab'}
               onClick = {() => toggleTab(3)}
             >
            {/* <h2> Experience </h2> */}
             </div>
         </div>

            <div className='tab-content'>

                <div className={ toggleTab === 1 ? 'content active-content' : 'content'} >
                    <h2>Ivan Drako </h2>     
                    <p> Student: Polithehnical university</p>
                    <h3> Group: AC202</h3>
                    <h3> Kurs: 3</h3>
                    
                </div>

                <div  className={ toggleTab === 2 ? 'content active-content' : 'content'}>
                    <h2>Skills</h2>     
                    <p> kfweiufwiuhf</p>

                    <div className='skills-row'>
                        <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h3>Develoment</h3>
                            <div className='progress'>
                                <div className='progress-bar'>
                                <span>80%</span>

                                </div>
                            </div>
                        </div> 
                        </div>


                        <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h3>Designer</h3>
                            <div className='progress'>
                                <div className='progress-bar'>
                                <span>90%</span>

                                </div>
                            </div>
                        </div> 
                        </div>


                        <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h3>Designer</h3>
                            <div className='progress'>
                                <div className='progress-bar'>
                                <span>80%</span>

                                </div>
                            </div>
                        </div> 
                        </div>
                        <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h3>Develoment</h3>
                            <div className='progress'>
                                <div className='progress-bar'>
                                <span>80%</span>

                                </div>
                            </div>
                        </div> 
                        </div>

                     </div>
     


                </div>

                <div  className={ toggleTab === 3 ? 'content active-content' : 'content'}>
                   
                    <div className='exp-column'> 
                        <h3>Web Development</h3>
                        <span>2014-2023</span>
                        <p>djhegfweifuifhweuifhweoihfin</p>
                    </div>


                    <div className='exp-column'> 
                        <h3>Graphic</h3>
                        <span>2014-2023</span>
                        <p>djhegfweifuifhweuifhweoihfin</p>
                    </div>


                    <div className='exp-column'> 
                        <h3>Photoshop</h3>
                        <span>2014-2023</span>
                        <p>djhegfweifuifhweuifhweoihfin</p>
                    </div>
                </div>
             </div>
  
    </div>

    </div>


    </section> 

   
   </Fragment>

   

  )
}

export default Profile
