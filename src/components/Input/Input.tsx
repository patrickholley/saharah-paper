import React from 'react';
import Styles from './Input.module.scss';

interface IProps {
  label: string;
  onChange(): void;
  value: string;
}

export default function Input({ label, onChange, value }: IProps) {
  return (
    <label className={Styles.input}>
      {label}
      <input onChange={onChange} value={value} />
    </label>
  );
}
