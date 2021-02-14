import React from 'react';
import Styles from './IconButton.module.scss';

interface IProps {
  children: React.ReactNode;
  onClick(): void;
}

export default function IconButton({ children, onClick }: IProps) {
  return (
    <button className={Styles['icon-button']} onClick={onClick} type="button">
      {children}
    </button>
  );
}
