import React from 'react';
import { usePsychologists } from '../PsychologistContext';
import { PsychologistChart } from '../PsychologistChart';
import { FeedbackSummaries } from '../FeedbackSummaries';
import { CircularProgress, Typography, Box } from '@mui/material';

const AppChart: React.FC = () => {
    const { loading, error } = usePsychologists();

    if (loading) return <CircularProgress />;
    if (error) return <Typography color='error'>{error}</Typography>;

    return (
        <>
            <PsychologistChart />
            <Box sx={{ marginTop: '10px' }}>
                {' '}
                <FeedbackSummaries />
            </Box>
        </>
    );
};

export default AppChart;
