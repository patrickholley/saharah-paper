import React from 'react';
import Styles from './AppCard.module.scss';
import Button from '../Button';
import { ISettings } from '../../lib/interfaces/ISettings';
import Icon, { IconType } from '../Icons';
import AppCardWrapper from './AppCardWrapper';
import Input from '../Input';
import HelpTip from '../HelpTip';

interface IProps {
  isMonitor?: boolean;
  location?: string;
  name?: string;
  process?: string;
}

export default function EditAppCard({
  isMonitor = false,
  location = '',
  name = '',
  process = '',
}: IProps) {
  function onNameChange() {
    // TODO: implement
  }

  function onProcessChange() {
    // TODO: implement
  }

  function onCancelClick() {
    // TODO: implement
  }

  function onImageClick() {
    // TODO: implement
  }

  function onSaveClick() {
    // TODO: implement
  }

  const ProcessLabel = () => (
    <span className={Styles['edit-app-card__label--process']}>
      Process
      <HelpTip>
        <div className={Styles['edit-app-card__help-tip--process']}>
          Part or all of process name to identify if application is running.
        </div>
      </HelpTip>
    </span>
  );

  return (
    <AppCardWrapper className={Styles['edit-app-card']} location={location}>
      <div className={Styles['app-card__edit-options']}>
        <Input
          className={Styles['app-card__edit-input']}
          label="Application"
          onChange={onNameChange}
          value={name}
        />
        <Input
          className={Styles['app-card__edit-input']}
          label={<ProcessLabel />}
          onChange={onProcessChange}
          value={process}
        />
        <div className={Styles['app-card__edit-buttons']}>
          <Button
            className={`${Styles['app-card__edit-button']} ${Styles.large}`}
            onClick={onImageClick}
          >
            Select Image
            <Icon iconType={IconType.IMAGE} />
          </Button>
          <Button
            className={Styles['app-card__edit-button']}
            onClick={onSaveClick}
          >
            Save
            <Icon iconType={IconType.SAVE} />
          </Button>
          <Button
            className={Styles['app-card__edit-button']}
            onClick={onCancelClick}
          >
            Cancel
            <Icon iconType={IconType.CANCEL} />
          </Button>
        </div>
      </div>
    </AppCardWrapper>
  );
}
