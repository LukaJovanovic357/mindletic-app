import React from 'react';
import { PsychologistProvider, usePsychologists } from './PsychologistContext';
import { PsychologistChart } from './PsychologistChart';
import { FeedbackSummaries } from './FeedbackSummaries';
import { CircularProgress, Container, Typography } from '@mui/material';

const AppContent: React.FC = () => {
    const { loading, error } = usePsychologists();

    if (loading) return <CircularProgress />;
    if (error) return <Typography color='error'>{error}</Typography>;

    return (
        <>
            <PsychologistChart />
            <FeedbackSummaries />
        </>
    );
};

const App: React.FC = () => {
    return (
        <PsychologistProvider>
            <Container maxWidth='md'>
                <Typography variant='h4' align='center' gutterBottom>
                    Psychologist Feedback
                </Typography>
                <AppContent />
            </Container>
        </PsychologistProvider>
    );
};

export default App;
