import React from 'react'
import classes from 'react';
import classes from './login.module.css';

const Login = () => {
    return (
        <div>
            <h2 className= "text-5xl text- center">Llogin Page</h2>
            <bottun className="submit-btn"> Login Buttom</bottun>
            <button className={ classes.btn}>Local CSS</button>
        </div>
    )
}

export default Login;