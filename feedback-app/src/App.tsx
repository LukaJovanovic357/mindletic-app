import React from 'react';
import { PsychologistProvider } from './PsychologistContext';
import {
    Container,
    Typography,
    ThemeProvider,
    createTheme
} from '@mui/material';
import AppChart from './components/AppChart';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            {' '}
            <PsychologistProvider>
                <Container
                    maxWidth='md'
                    sx={{
                        paddingX: { xs: '5px', sm: '16px' },
                        overflowX: 'hidden'
                    }}
                >
                    <Typography variant='h4' align='center' gutterBottom>
                        Psychologist Feedback
                    </Typography>
                    <AppChart />
                </Container>
            </PsychologistProvider>
        </ThemeProvider>
    );
};

export default App;
