import React from 'react';
import '../styles/logo.css'
import Logo_div from '../../../asset/images/logo_div.png'

export default function Logo () {
    return(
        <div className={"logo"}>
            <img src={Logo_div} alt={"div"} className={'logo_div'}/>
            <h1 className={'logo_name'}>UNICOIN</h1>
        </div>
    )
}