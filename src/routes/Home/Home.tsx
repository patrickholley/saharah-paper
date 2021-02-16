import { remote } from 'electron';
import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import Button from '../../components/Button';
import Icon, { IconType } from '../../components/Icons';
import usePrevious from '../../lib/hooks/usePrevious';
import { ISettings } from '../../lib/interfaces';
import userSettings from '../../../userSettings.json';
import Styles from './Home.module.scss';

export default function Home() {
  const [isOpeningEditWindow, setIsOpeningEditWindow] = useState(false);
  const prevIsOpeningEditWindow = usePrevious(isOpeningEditWindow);
  const [editDetails, setEditDetails] = useState({});

  useEffect(() => {
    if (isOpeningEditWindow && !prevIsOpeningEditWindow) {
      const editWindow = new remote.BrowserWindow({
        show: false,
        minWidth: 400,
        width: 600,
        height: 450,
        minHeight: 300,
        modal: true,
        parent: remote.getCurrentWindow(),
        title: 'Edit Monitor Settings',
        webPreferences: {
          nodeIntegration: true,
        },
      });

      editWindow.setMenuBarVisibility(false);

      editWindow.on('page-title-updated', (e) => {
        e.preventDefault();
      });

      editWindow.show();
      setIsOpeningEditWindow(false);

      // eslint-disable-next-line promise/catch-or-return
      editWindow.loadURL(
        `file://${__dirname}/index.html#/edit?${new URLSearchParams(
          editDetails
        ).toString()}}`
      );
    }
  }, [editDetails, isOpeningEditWindow, prevIsOpeningEditWindow]);

  function handleEdit(details: ISettings) {
    setEditDetails(details);
    setIsOpeningEditWindow(true);
  }

  function renderDefaultSettings() {
    return userSettings.defaults.locations.map(
      (location: string, i: number) => (
        <AppCard
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isMonitor
          location={location}
          name={`Monitor ${i + 1}`}
          onEdit={handleEdit}
        />
      )
    );
  }

  function renderApplicationSettings() {
    return userSettings.applications.map(
      ({ location, name, process }: ISettings) => (
        <AppCard
          key={process}
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
        <Button className={Styles['home__button--add']} onClick={() => {}}>
          Add
          <Icon iconType={IconType.ADD} />
        </Button>
      </h2>
      <div className={Styles.home__settings}>{renderApplicationSettings()}</div>
    </>
  );
}
