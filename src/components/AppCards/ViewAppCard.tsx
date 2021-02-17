import React from 'react';
import Styles from './AppCard.module.scss';
import Button from '../Button';
import { ISettings } from '../../lib/interfaces/ISettings';
import Icon, { IconType } from '../Icons';
import AppCardWrapper from './AppCardWrapper';

interface IProps {
  isMonitor?: boolean;
  location?: string;
  name?: string;
  onEdit?(settings: ISettings): void;
  process?: string;
}

export default function ViewAppCard({
  isMonitor = false,
  location = '',
  name = '',
  onEdit = () => {},
  process = '',
}: IProps) {
  function onDeleteClick() {
    // TODO: implement
  }

  function onEditClick() {
    onEdit({ location, name, process });
  }

  return (
    <AppCardWrapper location={location}>
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
    </AppCardWrapper>
  );
}
