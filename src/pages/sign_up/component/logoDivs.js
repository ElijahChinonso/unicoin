import React from 'react';
import '../styles/logoDivs.css'
import Icon from "../../../asset/images/logo_icon.png";

export default function LogoDivs () {
    return(
        <div className={'setUp'}>
            <div className={"div_one"}>
                <img className={"icon"} src={Icon} alt={'logo_Icon'}/>
            </div>
            <div className={"div_two"}></div>
            <div className={"div_three"}></div>

        </div>
    )
}