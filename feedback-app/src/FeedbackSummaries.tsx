import React from 'react';
import { usePsychologists } from './PsychologistContext';
import { Typography, Card, CardContent } from '@mui/material';

export const FeedbackSummaries: React.FC = () => {
    const { psychologists } = usePsychologists();

    return (
        <>
            {psychologists.map(psych => (
                <Card key={psych.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant='h6'>{psych.name}</Typography>
                        <Typography>Score: {psych.score}</Typography>
                        <Typography>{psych.feedbackSummary}</Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};
