import React from 'react';
import Input from '../Input';
import Styles from './AppCard.scss';
import { EditButton } from '../IconButtons';

interface IProps {
  isEditing: boolean;
  location: string;
  name: string;
  process?: string;
}

export default function AppCard({ isEditing, location, name }: IProps) {
  return (
    <div className={Styles['app-card']}>
      <img
        className={Styles['app-card__image']}
        alt={`File location: ${location}`}
        src={location}
      />
      {isEditing ? (
        <Input
          id="application name"
          label="Application Name:"
          onChange={() => {}}
          value={name}
        />
      ) : (
        <div className={Styles['app-card__label-wrapper']}>
          <span className={Styles['app-card__label']}>{name}</span>
          <EditButton className={Styles['app-card__icon']} />
        </div>
      )}
    </div>
  );
}

AppCard.defaultProps = {
  process: '',
};
