import React from 'react';
import { Bar } from 'react-chartjs-2';
import { usePsychologists } from './PsychologistContext';

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

    return <Bar data={chartData} />;
};
