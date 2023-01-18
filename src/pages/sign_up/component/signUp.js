import React from "react";
import '../styles/signUp.css'
import Icon from '../../../asset/images/logo_icon.png'

export default function SignUp () {
    return(
        <div className={'signUp_page'}>
            <div className={"div_one"}>
                <img className={"icon"} src={Icon} alt={'logo_Icon'}/>
            </div>
            <div className={"div_two"}></div>
            <div className={"div_three"}></div>

                <div className={'welcomeText_form_div'}>
                    <div className={'welcomeText_div'}>
                        <h1 className={'welcomeToUnicoin'}>Welcome to Unicoin</h1>
                        <h6 className={'signUpToGetStarted'}>Sign Up To Get Started</h6>
                    </div>
                </div>

        </div>
    )
}