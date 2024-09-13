import React from 'react';
import styles from './StepsList.module.scss';

interface StepsListProps {
    currentStep: 'dates' | 'route' | 'entertainment';
}

export const StepsList = ({ currentStep }: StepsListProps) => {
    return (
        <ul className={styles.stepsList}>
            <li className={`${currentStep === 'dates' ? styles.currentStep : ''} ${styles.stepsItem}`}>Даты</li>
            <li className={`${currentStep === 'route' ? styles.currentStep : ''} ${styles.stepsItem}`}>маршрут</li>
            <li className={`${currentStep === 'entertainment' ? styles.currentStep : ''} ${styles.stepsItem}`}>развлечения</li>
        </ul>
    );
};