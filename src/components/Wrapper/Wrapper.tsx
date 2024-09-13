import React from 'react';
import './Wrapper.scss';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return <div className='wrapper'>{children}</div>;
};
