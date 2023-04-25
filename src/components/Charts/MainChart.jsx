
import './Charts.css'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        month: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        month: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        month: 'April',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        month: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        month: 'June',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },

];

const MainChart = () => {
    return (
        <div className='areachart'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    title='Last 6 months'
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MainChart