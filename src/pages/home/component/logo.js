import * as React from 'react';
import '../styles/logo.css'
import Logo_div from '../../../asset/images/logo_div.png'
import { Link } from 'react-router-dom'
 
export default function Logo () {
    return(
        <div className={"logo"}>
            <img src={Logo_div} alt={"div"} className={'logo_div'}/>
            <Link to={'/signUp'} style={{textDecoration: 'none'}}>
                <h1 className={'logo_name animate__animated animate__backInDown'} >UNICOIN</h1>
            </Link>
        </div>
    )
}