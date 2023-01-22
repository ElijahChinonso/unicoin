import React from "react";

import LogoDivs from "./logoDivs";
import Form from '../../sign_up/component/form'
import LogInBtn from "./logIn_btn";

export default function SignUp () {
    return(
        <div className={'signUp_page'}>
            <LogoDivs/>
            <Form/>
            <LogInBtn/>
        </div>
    )
}