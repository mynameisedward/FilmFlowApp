import React from 'react'
import logo from './main-logo.jpg'
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img src={logo} alt="Film Flow App Logotype" className={s.logo} />
                <nav className={s.navbar}>
                    <ul>
                        <li className={s.navbar_elem}><span>Movies</span></li>
                        <li className={s.navbar_elem}><span>TV Shows</span></li>
                        <li className={s.navbar_elem}><span>People</span></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header