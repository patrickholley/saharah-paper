import React from 'react';
import Styles from './Button.module.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
  onClick(): void;
}

export default function Button({ className, children, onClick }: IProps) {
  return (
    <button
      className={`${Styles.button}${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};
