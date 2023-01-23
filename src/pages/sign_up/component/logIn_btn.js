import React from 'react';
import '../styles/logIn_btn.css'
import { Link } from "react-router-dom";

export default function LogInBtn () {
    return(
        <div className={'logInBtn_div'}>
            <button className={'logInBtn'}>
                <Link to={'/logIn'} style={{textDecoration: 'none'}}>Log In</Link>
            </button>
        </div>
    )
}