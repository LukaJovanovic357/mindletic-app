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
                        <Typography
                            variant='h6'
                            sx={{ color: 'rgba(41, 100, 194, 0.811)' }}
                        >
                            {psych.name}
                        </Typography>
                        <Typography sx={{ color: 'rgba(41, 100, 194, 0.811)' }}>
                            Score: {psych.score}
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{
                                fontStyle: 'italic'
                            }}
                        >
                            " {psych.feedbackSummary} "
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};
