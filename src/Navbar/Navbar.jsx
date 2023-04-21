
import React from 'react'
import './Navbar.css'
import { BiSearch } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { HiOutlineMoon } from 'react-icons/hi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
// import { SlSettings } from 'react-icons/si'
import { FiSettings } from 'react-icons/fi'


const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <div className="search__box">
                    <input type="text" name="search" id="search" placeholder='Search' />
                    <BiSearch className='nav__icon' />
                </div>

                <div className="nav__left">
                    <div className="language">
                        <BsGlobe className='nav__icon' />
                        <p>English</p>
                    </div>

                    <div className="theme"> <HiOutlineMoon className='nav__icon' /></div>
                    <div className="nav__notification">
                        <IoIosNotificationsOutline className='nav__icon' />
                        <span className="notification__count">4</span>

                    </div>
                    <div className="message">
                        <BiMessageSquareDetail className='nav__icon' />
                        <span className="message__count">6</span>
                    </div>
                    <div className="nav__profile">
                        <img src="" alt="" />
                    </div>

                    <div className="setting_icon">
                        <FiSettings className='nav__icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar