import React, { ReactNode } from 'react';
import Styles from './AppCard.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  location?: string;
}

export default function AppCardWrapper({
  children,
  className,
  location = '',
}: IProps) {
  return (
    <div className={`${Styles['app-card']}${className ? ` ${className}` : ''}`}>
      <div className={Styles['app-card__image-wrapper']}>
        <img
          className={Styles['app-card__image']}
          alt={`File location: ${location}`}
          src={location}
        />
      </div>
      {children}
    </div>
  );
}
