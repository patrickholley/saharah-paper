import React from 'react';
import Input from '../Input';
import Styles from './AppCard.scss';
import { EditButton } from '../IconButtons';
import { ISettings } from '../../lib/interfaces/ISettings';

interface IProps {
  isEditing?: boolean;
  location: string;
  name: string;
  onEdit(settings: ISettings): void;
  process?: string;
}

export default function AppCard({
  isEditing,
  location,
  name,
  onEdit,
  process,
}: IProps) {
  function onClick() {
    onEdit({ location, name, process });
  }

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
          <EditButton onClick={onClick} />
        </div>
      )}
    </div>
  );
}

AppCard.defaultProps = {
  isEditing: false,
  process: '',
};
