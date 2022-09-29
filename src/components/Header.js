import React from 'react'
import './style.css'

function Header() {
    return (
        /*the section on the page where the logo is added*/
        <div>
            <a href='/'><img src='/img/logo.png' alt='logo' className='logo' /></a>
        </div>
    )
}

export default Header