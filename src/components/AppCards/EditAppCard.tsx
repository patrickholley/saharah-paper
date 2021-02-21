import React, { useState } from 'react';
import { remote } from 'electron';
import Styles from './EditAppCard.module.scss';
import Button from '../Button';
import Icon, { IconType } from '../Icons';
import AppCardWrapper from './AppCardWrapper';
import Input from '../Input';
import HelpTip from '../HelpTip';
import { ISetting } from '../../lib/interfaces';
import { saveSetting } from '../../lib/utils';

interface IProps extends ISetting {
  isAdding?: boolean;
}

export default function EditAppCard(props: IProps) {
  const {
    id,
    isAdding,
    isMonitor,
    location: propsLocation,
    name: propsName = '',
    process: propsProcess = '',
  } = props;
  const [location, setLocation] = useState(propsLocation);
  const [name, setName] = useState(propsName);
  const [process, setProcess] = useState(propsProcess);

  function handleNameChange({ target }: { target: HTMLInputElement }) {
    setName(target.value);
  }

  function handleProcessChange({ target }: { target: HTMLInputElement }) {
    setProcess(target.value);
  }

  function handleClose() {
    remote.getCurrentWindow().close();
  }

  function handleSelectImage() {
    remote.dialog
      .showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }],
      })
      .then(({ filePaths }) => {
        setLocation(filePaths[0]);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  function handleSave() {
    saveSetting({ id, isMonitor, location, name, process }, isAdding);
    handleClose();
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
      <form className={Styles['edit-app-card__options']} onSubmit={handleSave}>
        {!isMonitor ? (
          <>
            <Input
              className={Styles['edit-app-card__input']}
              label="Application"
              onChange={handleNameChange}
              value={name}
            />
            <Input
              className={Styles['edit-app-card__input']}
              label={<ProcessLabel />}
              onChange={handleProcessChange}
              value={process}
            />
          </>
        ) : (
          <div>Monitor {id + 1}</div>
        )}
        <div className={Styles['edit-app-card__buttons']}>
          <Button
            className={`${Styles['edit-app-card__button']} ${Styles.large}`}
            onClick={handleSelectImage}
          >
            Select Image
            <Icon iconType={IconType.IMAGE} />
          </Button>
          <Button className={Styles['edit-app-card__button']} isSubmit>
            Save
            <Icon iconType={IconType.SAVE} />
          </Button>
          <Button
            className={Styles['edit-app-card__button']}
            onClick={handleClose}
          >
            Cancel
            <Icon iconType={IconType.CANCEL} />
          </Button>
        </div>
      </form>
    </AppCardWrapper>
  );
}
