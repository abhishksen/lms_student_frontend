import React from 'react'
import { Chart as ChartJs, ArcElement, CategoryScale, Legend, LineElement, LinearScale, PointElement, Title, Tooltip, } from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend)

export const LineChart = () => {
    const labels = getLastYearMonths();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Yearly Views'
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: [12, 19, 3, 5, 2, 3, 15, 20, 13, 40, 10, 6],
                borderColor: '#6B46C1',
                backgroundColor: '#8365cbe0',
            }
        ]
    }

    return (
        <Line options={options} data={data} />
    )
}


export const DoughnutChart = () => {

    const data = {
        labels: ['Subscribed', 'Not Subscribed'],
        datasets: [
            {
                label: 'Views',
                data: [230, 30],
                borderColor: ['#6B46C1', '#8365cbe0'],
                backgroundColor: ['#6B46C1', '#8365cbe0'],
                borderWidth: 1,
            }
        ]
    }

    return (
        <Doughnut data={data} />
    )
}

function getLastYearMonths() {
    const labels = [];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Augest',
        'September',
        'October',
        'November',
        'December',
    ];
    let currentMonth = new Date().getMonth();
    const remainingMonths = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === 0) {
            break;
        }
    }

    for (let i = 11; i > remainingMonths; i--) {
        if (i === currentMonth) break;
        const element = months[i];
        labels.unshift(element);
    }
    return labels;
}