import React from 'react';
//  import Styles from './Input.scss';

interface IProps {
  id: string;
  label: string;
  onChange(): void;
  value: string;
}

export default function Input({ id, label, onChange, value }: IProps) {
  return (
    <label htmlFor={id}>
      {label}
      <input id={id} onChange={onChange} value={value} />
    </label>
  );
}
