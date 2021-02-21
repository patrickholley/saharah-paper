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
  function handleImageError() {}

  return (
    <div
      className={`${Styles['app-card-wrapper']}${
        className ? ` ${className}` : ''
      }`}
    >
      <div
        className={Styles['app-card-wrapper__image-wrapper']}
        style={imageHeight ? { height: imageHeight } : {}}
      >
        <img
          className={Styles['app-card-wrapper__image']}
          alt={`File location: ${location}`}
          onError={handleImageError}
          src={location}
        />
      </div>
      {children}
    </div>
  );
}
