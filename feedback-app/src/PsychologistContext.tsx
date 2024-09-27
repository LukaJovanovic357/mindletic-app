import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';
import { fetchPsychologistData } from './api';

export interface Psychologist {
    id: string;
    name: string;
    score: number;
    feedbackSummary: string;
}

interface PsychologistContextProps {
    psychologists: Psychologist[];
    loading: boolean;
    error: string | null;
}

const PsychologistContext = createContext<PsychologistContextProps | undefined>(
    undefined
);

interface PsychologistProviderProps {
    children: ReactNode;
}

export const PsychologistProvider: React.FC<PsychologistProviderProps> = ({
    children
}) => {
    const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPsychologistData()
            .then(data => {
                setPsychologists(data);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <PsychologistContext.Provider value={{ psychologists, loading, error }}>
            {children}
        </PsychologistContext.Provider>
    );
};

export const usePsychologists = () => {
    const context = useContext(PsychologistContext);
    if (!context) {
        throw new Error(
            'usePsychologists must be used within a PsychologistProvider'
        );
    }
    return context;
};
