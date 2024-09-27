import { mockPsychologistData } from './data/data';
import { Psychologist } from '../types/types';

export const fetchPsychologistData = (): Promise<Psychologist[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockPsychologistData);
        }, 300);
    });
};
