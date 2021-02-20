import React from 'react';
import Styles from './ViewAppCard.module.scss';
import Button from '../Button';
import { ISettings } from '../../lib/interfaces/ISettings';
import Icon, { IconType } from '../Icons';
import AppCardWrapper from './AppCardWrapper';

interface IProps extends ISettings {
  onEdit?(settings: ISettings): void;
}

export default function ViewAppCard({
  id,
  isMonitor,
  location,
  name,
  onEdit = () => {},
  process,
}: IProps) {
  function onDeleteClick() {
    // TODO: implement
  }

  function onEditClick() {
    onEdit({ id, isMonitor, location, name, process });
  }

  return (
    <AppCardWrapper location={location}>
      <div className={Styles['view-app-card__label-wrapper']}>
        <span className={Styles['view-app-card__label']}>{name}</span>
        <div className={Styles['view-app-card__buttons']}>
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
