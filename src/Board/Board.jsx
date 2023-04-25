
import React from 'react'
import './Board.css'
import Cards from '../components/Cards/Cards'
import CircularChart from '../components/Charts/CircularChart'
import MainChart from '../components/Charts/MainChart'

const Board = () => {
    return (
        <main className='container main__container'>
            <Cards />
            <div className="charts">
                <CircularChart />
                <MainChart />
            </div>
        </main>
    )
}

export default Board