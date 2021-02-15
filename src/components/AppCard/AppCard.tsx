import React from 'react';
import Input from '../Input';
import Styles from './AppCard.module.scss';
import Button from '../Button';
import { ISettings } from '../../lib/interfaces/ISettings';
import Icon from '../Icons';

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
  function onDeleteClick() {
    // TODO: implement
  }

  function onEditClick() {
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
          <div className={Styles['app-card__buttons']}>
            <Button onClick={onEditClick}>
              <Icon icon="edit" />
            </Button>
            <Button onClick={onDeleteClick}>
              <Icon icon="delete" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

AppCard.defaultProps = {
  isEditing: false,
  process: '',
};
