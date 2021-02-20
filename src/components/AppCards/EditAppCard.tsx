import React from 'react';
import { remote } from 'electron';
import Styles from './EditAppCard.module.scss';
import Button from '../Button';
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
    remote.getCurrentWindow().close();
  }

  function onImageClick() {
    remote.dialog
      .showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }],
      })
      .then(({ filePaths }) => {
        console.log(filePaths[0]);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  function onSaveClick() {
    // TODO: implement
  }

  const ProcessLabel = () => (
    <span className={Styles['edit-app-card__label--process']}>
      Process
      <HelpTip>
        <div className={Styles['edit-app-card__help-tip--process']}>
          Part or all of process name when application is running.
        </div>
      </HelpTip>
    </span>
  );

  return (
    <AppCardWrapper
      className={Styles['edit-app-card']}
      imageHeight={270}
      location={location}
    >
      <div className={Styles['edit-app-card__options']}>
        <Input
          className={Styles['edit-app-card__input']}
          label="Application"
          onChange={onNameChange}
          value={name}
        />
        <Input
          className={Styles['edit-app-card__input']}
          label={<ProcessLabel />}
          onChange={onProcessChange}
          value={process}
        />
        <div className={Styles['edit-app-card__buttons']}>
          <Button
            className={`${Styles['edit-app-card__button']} ${Styles.large}`}
            onClick={onImageClick}
          >
            Select Image
            <Icon iconType={IconType.IMAGE} />
          </Button>
          <Button
            className={Styles['edit-app-card__button']}
            onClick={onSaveClick}
          >
            Save
            <Icon iconType={IconType.SAVE} />
          </Button>
          <Button
            className={Styles['edit-app-card__button']}
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
