
import React from 'react'
import './Board.css'
import Cards from '../components/Cards/Cards'
import CircularChart from '../components/Charts/CircularChart'
import MainChart from '../components/Charts/MainChart'
import TableComponent from '../components/TableComponent'

const Board = () => {
    return (
        <main className='container main__container'>
            <Cards />
            <div className="charts">
                <CircularChart />
                <MainChart />
            </div>

            <TableComponent />
        </main>
    )
}

export default Board