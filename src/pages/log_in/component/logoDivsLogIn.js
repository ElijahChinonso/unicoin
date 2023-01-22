import React from "react";
import '../styles/logoDivsLogIn.css'
import Icon from "../../../asset/images/logo_icon.png";

export default function LogoDivsLogIn (){
    return(
        <div className={'logInLogoDivs'}>
            <div className={"div_oneL"}>
                <img className={"icon"} src={Icon} alt={'logo_Icon'}/>
            </div>
            <div className={"div_twoL"}></div>
            <div className={"div_threeL"}></div>
        </div>
    )
}