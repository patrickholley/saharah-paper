import React from 'react';
import Input from '../Input';
import Styles from './AppCard.module.scss';
import Button from '../Button';
import { ISettings } from '../../lib/interfaces/ISettings';
import Icon, { IconType } from '../Icons';
import SaveIcon from '../Icons/SaveIcon';
import ImageIcon from '../Icons/ImageIcon';
import CancelIcon from '../Icons/CancelIcon';

interface IProps {
  isEditing?: boolean;
  isNew?: boolean;
  isMonitor?: boolean;
  location?: string;
  name?: string;
  onEdit?(settings: ISettings): void;
  process?: string;
}

export default function AppCard({
  isEditing = false,
  isNew = false,
  isMonitor = false,
  location = '',
  name = '',
  onEdit = () => {},
  process = '',
}: IProps) {
  // TODO: Fix for monitor settings (i.e. shouldn't have delete button)

  function onDeleteClick() {
    // TODO: implement
  }

  function onEditClick() {
    onEdit({ location, name, process });
  }

  return (
    <div
      className={`${Styles['app-card']}${
        isEditing ? ` ${Styles['is-editing']}` : ''
      }`}
    >
      <div className={Styles['app-card__image-wrapper']}>
        <img
          className={Styles['app-card__image']}
          alt={`File location: ${location}`}
          src={location}
        />
      </div>
      {isEditing ? (
        <div className={Styles['app-card__edit-options']}>
          <Input label="Application" onChange={() => {}} value={name} />
          <Input label="Process" onChange={() => {}} value={process} />
          <div className={Styles['app-card__edit-buttons']}>
            <Button
              className={`${Styles['app-card__edit-button']} ${Styles.large}`}
              onClick={() => {}}
            >
              Select Image
              <ImageIcon />
            </Button>
            <Button
              className={`${Styles['app-card__edit-button']} ${Styles.small1}`}
              onClick={() => {}}
            >
              Save
              <SaveIcon />
            </Button>
            <Button
              className={`${Styles['app-card__edit-button']} ${Styles.small2}`}
              onClick={() => {}}
            >
              Cancel
              <CancelIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className={Styles['app-card__label-wrapper']}>
          <span className={Styles['app-card__label']}>{name}</span>
          <div className={Styles['app-card__buttons']}>
            <Button onClick={onEditClick}>
              <Icon iconType={IconType.EDIT} />
            </Button>
            {!isMonitor && (
              <Button onClick={onDeleteClick}>
                <Icon iconType={IconType.DELETE} />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
