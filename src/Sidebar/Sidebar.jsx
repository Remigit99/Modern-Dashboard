
import React from 'react';
import './Sidebar.css'
// import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
// import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
// import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
// import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';


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

            <hr />

            <div className="middle__sec">
                <ul>

                    <div className="main">
                        <p>MAIN</p>
                        <li>
                            <RxDashboard className='icon' />
                            <span> Dashboard</span>
                        </li>
                    </div>

                    <div className="lists">
                        <p>LISTS</p>
                        <li>
                            <HiOutlineUsers className='icon' />
                            Users
                        </li>
                        <li>
                            <MdWorkOutline className='icon' />
                            <span>Products</span>
                        </li>
                        <li>
                            <FiCreditCard className='icon' />
                            <span> Orders</span>
                        </li>
                        <li>
                            <CiDeliveryTruck className='icon' />
                            <span>Delivery</span>
                        </li>
                    </div>

                    <div className="useful">
                        <p>USEFUL</p>
                        <li>
                            <IoIosStats className='icon' />
                            <span>Stats</span>
                        </li>
                        <li>
                            <IoIosNotificationsOutline className='icon' />
                            <span>Notifications</span>
                        </li>
                    </div>

                    <div className="service">
                        <p>SERVICE</p>
                        <li>
                            <TbHeartRateMonitor className='icon' />
                            <span>System Health </span>
                        </li>
                        <li>
                            <GrSystem className='icon' />
                            <span>Logs</span>
                        </li>
                        <li>
                            <FiSettings className='icon' />
                            <span>Settings</span>
                        </li>
                    </div>

                    <div className="user">
                        <p>USER</p>
                        <li>
                            <CgProfile className='icon' />
                            <span>Profile</span>
                        </li>
                        <li>
                            <FiLogOut className='icon' />
                            <span>Logout</span>
                        </li>
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