import React from 'react';
import Styles from './ViewAppCard.module.scss';
import Button from '../Button';
import { ISetting } from '../../lib/interfaces';
import Icon, { IconType } from '../Icons';
import AppCardWrapper from './AppCardWrapper';
import removeSetting from '../../lib/utils/removeSetting';

interface IProps extends ISetting {
  onEdit?(settings: ISetting): void;
}

export default function ViewAppCard({
  id,
  isMonitor,
  location,
  name,
  onEdit = () => {},
  process,
}: IProps) {
  function handleDelete() {
    removeSetting(id);
  }

  function handleEdit() {
    onEdit({ id, isMonitor, location, name, process });
  }

  return (
    <AppCardWrapper location={location}>
      <div className={Styles['view-app-card__label-wrapper']}>
        <span className={Styles['view-app-card__label']}>{name}</span>
        <div className={Styles['view-app-card__buttons']}>
          <Button onClick={handleEdit}>
            <Icon iconType={IconType.EDIT} />
          </Button>
          {!isMonitor && (
            <Button onClick={handleDelete}>
              <Icon iconType={IconType.DELETE} />
            </Button>
          )}
        </div>
      </div>
    </AppCardWrapper>
  );
}
