import React from "react";
import '../styles/form.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form () {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className={'welcomeText_form_div'}>

            <div className={'welcomeText_div'}>
                <h1 className={'welcomeToUnicoin animate__animated animate__slideInLeft'}>Welcome to Unicoin</h1>
                <h6 className={'signUpToGetStarted animate__animated animate__slideInRight'}>Sign Up To Get Started</h6>
            </div>

            <div className={'form_div'}>
                <form className={'form'} action={'localhost:8084/api/v1/registration/register'} method={'POST'}>
                    <label className={'label'}>First name :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input'}
                           value={firstName}
                           onChange={(e => setFirstName(e.target.value))}
                           type={'text'}
                           name={'firstName'}
                           required

                    />

                    <label className={'label'}>Last name :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input'}
                           value={lastName}
                           onChange={(e => setLastName(e.target.value))}
                           type={'text'}
                           name={'lastName'}
                           required
                    />

                    <label className={'label'}>Email :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input'}
                           value={email}
                           onChange={(e => setEmail(e.target.value))}
                           type={'email'}
                           name={'email'}
                           required
                    />

                    <label className={'label'}>Password :<span style={{color: 'red'}}>*</span></label>
                    <input className={'input'}
                           value={password}
                           onChange={(e => setPassword(e.target.value))}
                           type={'password'}
                           name={'password'}
                           required
                    />


                    <button className={'signUp'} type={"submit"}>
                        <Link to={'/logIn'} style={{textDecoration: 'none', color: 'gold'}}>Sign Up</Link>
                    </button>
                </form>

                <h4 className={'signUp_alt'}>already have an account?
                    <Link to={'/logIn'} id={'lg'}>Login</Link>
                </h4>
            </div>
        </div>
    )
}