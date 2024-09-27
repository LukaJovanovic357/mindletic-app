import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { usePsychologists } from './PsychologistContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const PsychologistChart: React.FC = () => {
    const { psychologists } = usePsychologists();

    const chartData = {
        labels: psychologists.map(p => p.name),
        datasets: [
            {
                label: 'Average Score',
                data: psychologists.map(p => p.score),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: 'Psychologists Average Scores'
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};
