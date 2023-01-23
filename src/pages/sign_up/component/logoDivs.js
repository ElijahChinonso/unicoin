import React from 'react';
import '../styles/logoDivs.css'
import Icon from "../../../asset/images/logo_icon.png";
import { Link } from "react-router-dom";

export default function LogoDivs () {
    return(
        <div className={'setUp'}>
            <div className={"div_one"}>
                <Link to={'/'}>
                    <img className={"icon"} src={Icon} alt={'logo_Icon'}/>
                </Link>
            </div>
            <div className={"div_two"}></div>
            <div className={"div_three"}></div>

        </div>
    )
}