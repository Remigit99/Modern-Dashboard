
import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';


import { RxDashboard } from 'react-icons/rx'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { FiCreditCard } from 'react-icons/fi'
import { CiDeliveryTruck } from 'react-icons/ci'
import { IoIosStats, IoIosNotificationsOutline } from 'react-icons/io'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { GrSystem } from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
// import { FaRegUserCircle } from 'react-icons/fa'


const Sidebar = () => {
    return (
        <aside>
            <div className="logo__sec">
                <h1>Re<span style={{ color: 'Brown' }}>mi</span></h1>
            </div>

            <div className="middle__sec">
                <ul>

                    <div className="main">
                        <p>MAIN</p>

                        <Link to='/'>
                            <li>
                                <RxDashboard className='icon' />
                                <span> Dashboard</span>
                            </li>
                        </Link>

                    </div>

                    <div className="lists">
                        <p>LISTS</p>
                        <Link to='/users'>
                            <li>
                                <HiOutlineUsers className='icon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products'>
                            <li>
                                <MdWorkOutline className='icon' />
                                <span>Products</span>
                            </li>
                        </Link>
                        <Link to='/'>
                            <li>
                                <FiCreditCard className='icon' />
                                <span> Orders</span>
                            </li>
                        </Link>
                        <Link to='/'>
                            <li>
                                <CiDeliveryTruck className='icon' />
                                <span>Delivery</span>
                            </li>
                        </Link>
                    </div>

                    <div className="useful">
                        <p>USEFUL</p>
                        <Link to='/' >
                            <li>
                                <IoIosStats className='icon' />
                                <span>Stats</span>
                            </li>
                        </Link>

                        <Link to='/' >
                            <li>
                                <IoIosNotificationsOutline className='icon' />
                                <span>Notifications</span>
                            </li>
                        </Link>
                    </div>

                    <div className="service">
                        <p>SERVICE</p>

                        <Link to='/'>
                            <li>
                                <TbHeartRateMonitor className='icon' />
                                <span>System Health </span>
                            </li>
                        </Link>

                        <Link to='/'>
                            <li>
                                <GrSystem className='icon' />
                                <span>Logs</span>
                            </li>
                        </Link>

                        <Link to='/'>
                            <li>
                                <FiSettings className='icon' />
                                <span>Settings</span>
                            </li>
                        </Link>
                    </div>

                    <div className="user">
                        <p>USER</p>
                        <Link to='/single'>
                            <li>
                                <CgProfile className='icon' />
                                <span>Profile</span>
                            </li>
                        </Link>

                        <Link to='/'>
                            <li>
                                <FiLogOut className='icon' />
                                <span>Logout</span>
                            </li>
                        </Link>
                    </div>

                    <div className="theme">
                        <p>THEME</p>
                        <button title='white theme'></button>
                        <button title='dark theme'></button>

                    </div>


                </ul>
            </div>
        </aside>
    )
}

export default Sidebar