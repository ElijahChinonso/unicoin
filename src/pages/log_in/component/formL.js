import React from "react";
import '../styles/formL.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FormL () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return(
        <div className={'welcomeBackText_form_div'}>
            <div className={'welcomeBackText_div'}>
                <h1 className={'welcomeBack animate__animated animate__slideInLeft'}>Welcome Back</h1>
                <h6 className={'logInToHaveAccess animate__animated animate__slideInRight'}>Log In to have access</h6>
            </div>

            <div className={'formDivL'}>
                <form className={'formL'}>
                    <label className={'label_login'}>Email :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input_L'}
                           value={email}
                           onChange={(e => setEmail(e.target.value))}
                           type={'email'}
                           name={'email'}
                           required

                    />

                    <label className={'label_login'}>Password :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input_L'}
                           value={password}
                           onChange={(e => setPassword(e.target.value))}
                           type={'password'}
                           name={'password'}
                           required
                    />

                    

                    <h4 className={'forgot_password'}>Forgot password? <u id={'lg'}>Reset</u></h4>

                    <button className={'logIn'} type={"submit"}>Log In</button>

                    <h4 className={'logIn_alt'}>Need an account?<Link to={'/signUp'} id={'lg'}>Sign Up Here</Link></h4>
                </form>
            </div>
        </div>
    )
}