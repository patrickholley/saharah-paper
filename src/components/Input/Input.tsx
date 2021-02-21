import React, { ReactNode } from 'react';
import Styles from './Input.module.scss';

interface IProps {
  className?: string;
  label: string | ReactNode;
  onChange({ target }: { target: HTMLInputElement }): void;
  value: string;
}

export default function Input({ className, label, onChange, value }: IProps) {
  return (
    <label
      className={`${Styles['input-wrapper']}${
        className ? ` ${className}` : ''
      }`}
    >
      {label}
      <input className={Styles.input} onChange={onChange} value={value} />
    </label>
  );
}
