
import React from 'react'
import './Home.css'
import Sidebar from '../../Sidebar/Sidebar'
import Main from '../../Main/Main'


const Home = () => {
    return (
        <div className='home__main'>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home