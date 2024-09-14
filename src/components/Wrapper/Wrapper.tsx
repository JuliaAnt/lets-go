import React from 'react';
import styles from './wrapper.module.scss';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
