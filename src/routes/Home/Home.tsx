import { remote } from 'electron';
import React, { useEffect, useState } from 'react';
import { ViewAppCard } from '../../components/AppCards';
import Button from '../../components/Button';
import Icon, { IconType } from '../../components/Icons';
import { usePrevious } from '../../lib/hooks';
import { ISetting, ISettingsApp } from '../../lib/interfaces';
import { getSettings } from '../../lib/utils';
import Styles from './Home.module.scss';

export default function Home() {
  const emptySetting = {
    id: -1,
    isMonitor: false,
    location: '',
  };

  const settings = getSettings();
  const [isAdding, setIsAdding] = useState(false);
  const [isOpeningEditWindow, setIsOpeningEditWindow] = useState(false);
  const prevIsOpeningEditWindow = usePrevious(isOpeningEditWindow);
  const [editDetails, setEditDetails] = useState<ISetting>(emptySetting);

  useEffect(() => {
    if (isOpeningEditWindow && !prevIsOpeningEditWindow) {
      const editWindow = new remote.BrowserWindow({
        show: false,
        width: 550,
        height: 600,
        modal: true,
        resizable: false,
        parent: remote.getCurrentWindow(),
        title: isAdding
          ? 'Add Application'
          : `Edit ${
              editDetails.isMonitor ? 'Monitor' : 'Application'
            } Settings`,
        webPreferences: {
          enableRemoteModule: true,
          nodeIntegration: true,
        },
      });

      editWindow.setMenuBarVisibility(false);

      editWindow.on('page-title-updated', (e) => {
        e.preventDefault();
      });

      editWindow.show();
      setIsOpeningEditWindow(false);
      if (isAdding) setIsAdding(false);

      const URLPath = isAdding
        ? '/add?' // TODO: Why is ? necessary to load path?
        : `/edit?${new URLSearchParams(
            (editDetails as unknown) as Record<string, string>
          ).toString()}`;

      editWindow.loadURL(`file://${__dirname}/index.html#${URLPath}}`);
    }
  }, [editDetails, isAdding, isOpeningEditWindow, prevIsOpeningEditWindow]);

  function handleAdd() {
    setIsAdding(true);
    setEditDetails(emptySetting);
    setIsOpeningEditWindow(true);
  }

  function handleEdit(details: ISetting) {
    setEditDetails(details);
    setIsOpeningEditWindow(true);
  }

  function renderDefaultSettings() {
    return settings.defaults.locations.map((location: string, i: number) => (
      <ViewAppCard
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        id={i}
        isMonitor
        location={location}
        name={`Monitor ${i + 1}`}
        onEdit={handleEdit}
      />
    ));
  }

  function renderApplicationSettings() {
    return settings.applications.map(
      ({ id, location, name, process }: ISettingsApp) => (
        <ViewAppCard
          key={id}
          id={id}
          isMonitor={false}
          location={location}
          name={name}
          onEdit={handleEdit}
          process={process}
        />
      )
    );
  }

  return (
    <>
      <h2 className={Styles.home__heading}>Monitors</h2>
      <div className={Styles.home__settings}>{renderDefaultSettings()}</div>
      <hr className={Styles.home__hr} />
      <h2 className={Styles.home__heading}>
        Applications{' '}
        <Button className={Styles['home__button--add']} onClick={handleAdd}>
          Add
          <Icon iconType={IconType.ADD} />
        </Button>
      </h2>
      <div className={`${Styles.home__settings} ${Styles.applications}`}>
        {renderApplicationSettings()}
      </div>
    </>
  );
}
