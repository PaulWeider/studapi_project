
import React from "react";
import loginImg from "../../../login.svg"


export class Register_admin extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
            <div className="image">
             <img src={loginImg}/>
            </div>
            <div className="form">
                <div className="from-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder = "username" />
                </div>
                <div className="from-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder = "name" />
                </div>
                <div className="from-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" placeholder = "surname" />
                </div>
                {/* <div className="from-group">
                    <label htmlFor="group">Group</label>
                    <input type="text" name="group" placeholder = "group" />
                </div> */}
                <div className="from-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder = "password" />
                </div>

                <div className="from-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder = "email" />
                </div>

            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">
          Register
            </button>
        </div>

        </div>
    }



}