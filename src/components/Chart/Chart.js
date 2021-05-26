import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar
            key={dataPoint.label}
            valur={dataPoint.valur}
            maxValue={maxValue}
            label={dataPoint.label} />)}
    </div>
};

export default Chart;