import React from "react";
import '../styles/logoDivsLogIn.css'
import Icon from "../../../asset/images/logo_icon.png";
import { Link } from "react-router-dom";

export default function LogoDivsLogIn (){
    return(
        <div className={'logInLogoDivs'}>
            <div className={"div_oneL"}>
                <Link to={'/'}>
                    <img className={"icon"} src={Icon} alt={'logo_Icon'}/>
                </Link>
            </div>
            <div className={"div_twoL"}></div>
            <div className={"div_threeL"}></div>
        </div>
    )
}