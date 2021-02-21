import React from 'react';
import Styles from './Button.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
} & (
  | { onClick(): void; isSubmit?: never }
  | { onClick?: never; isSubmit: true }
);

export default function Button({
  className,
  children,
  onClick,
  isSubmit,
}: Props) {
  return (
    <button
      className={`${Styles.button}${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}
