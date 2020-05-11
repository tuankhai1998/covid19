import React from 'react';
import { Line, HorizontalBar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data, country, dataCountry }) => {
    const reportDate = data.map(({ reportDate }) => reportDate);
    const Confirmed = data.map(({ totalConfirmed }) => totalConfirmed);
    const death = data.map(({ deaths }) => deaths.total);
    const { confirmed, recovered, deaths } = dataCountry;

    const lineChart = () => {

        if (data.length !== 0 && country === "") {
            return (<Line
                data={{
                    labels: reportDate,
                    datasets: [{
                        data: Confirmed,
                        label: 'Số người nhiễm',
                        borderColor: '#F3C178',
                        backgroundColor: '#F3C178',
                        fill: true,
                    }, {
                        data: death,
                        label: 'Số người chết',
                        borderColor: '#FE5E41',
                        backgroundColor: '#FE5E41',
                        fill: true,
                    }],
                }}
            />)
        }
        if (country !== "" && dataCountry) {
            return <HorizontalBar
                data={{
                    labels: ['Người nhiểm', 'Người khỏi', 'Người tử vong'],
                    datasets: [{
                        label: 'Số người',
                        backgroundColor: [
                            'rgb(243,193,120)',
                            'rgb(0,168,120)',
                            'rgb(254,94,65)',
                        ],
                        data: [confirmed, recovered, deaths]
                    }]

                }}

                options={{
                    legend: { display: false },
                    title: { display: true, text: `Tình trạng hiện tại ${country}` }

                }}

            />
        }
        return null;
    }
    return (
        <div className={styles.Chart}>
            {lineChart()}
        </div>
    );
}

export default Chart;
