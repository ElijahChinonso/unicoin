import React from "react";
import '../styles/signUp.css'
import LogoDivs from "./logoDivs";
import Form from '../../sign_up/component/form'

export default function SignUp () {
    return(
        <div className={'signUp_page'}>
            <LogoDivs/>
            <Form/>
        </div>
    )
}