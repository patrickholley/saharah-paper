import React from 'react';
import Styles from './Button.scss';

interface IProps {
  className?: string;
}

export default function EditButton({ className }: IProps) {
  return (
    <button className={`${Styles.button} ${Styles.icon}`} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    </button>
  );
}

EditButton.defaultProps = {
  className: '',
};
