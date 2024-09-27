import { ReactNode } from 'react';

export interface Psychologist {
    id: string;
    name: string;
    score: number;
    feedbackSummary: string;
}

export interface PsychologistContextProps {
    psychologists: Psychologist[];
    loading: boolean;
    error: string | null;
}

export interface PsychologistProviderProps {
    children: ReactNode;
}
