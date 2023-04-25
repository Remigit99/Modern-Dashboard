import './Charts.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularChart = () => {
    return (
        <div className='circularchart'>
            <div className="circularchart__header">
                <h2>Total Revenue</h2>
                <span>I</span>
            </div>
            <CircularProgressbar value={75} text={`${75}%`} className='bar' />
            <h5>Total sales made today</h5>
            <h1>$558</h1>
            <h6>Previous transactions processing. Last payment may not be included</h6>

            <div className="revenue__stat">
                <div className="target">
                    <h4>Target</h4>
                    <div className="target__value">
                        {/* icon */}
                        $12.4k
                    </div>
                </div>
                <div className="last__week">
                    <h4>Last Week</h4>
                    <div className="week__value">
                        {/* icon */}
                        $17.2k
                    </div>
                </div>
                <div className="last__month">
                    <h4>Last Month</h4>
                    <div className="month__value">
                        {/* icon */}
                        $87.9k
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CircularChart;