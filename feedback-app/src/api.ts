import { mockPsychologistData } from './data/data';
import { Psychologist } from './PsychologistContext';

export const fetchPsychologistData = (): Promise<Psychologist[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockPsychologistData);
        }, 300);
    });
};
