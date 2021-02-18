import React, { ReactNode } from 'react';
import Styles from './AppCardWrapper.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  imageHeight?: number;
  location?: string;
}

export default function AppCardWrapper({
  children,
  className,
  imageHeight,
  location = '',
}: IProps) {
  return (
    <div className={`${Styles['app-card']}${className ? ` ${className}` : ''}`}>
      <div
        className={Styles['app-card__image-wrapper']}
        style={imageHeight ? { height: imageHeight } : {}}
      >
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
