import React from 'react';
import Styles from './Button.scss';

interface IProps {
  children: React.ReactNode;
}

export default function IconButton({ children }: IProps) {
  return (
    <button className={`${Styles.button} ${Styles.icon}`} type="button">
      {children}
    </button>
  );
}
