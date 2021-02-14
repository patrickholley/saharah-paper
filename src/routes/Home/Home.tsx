import { remote } from 'electron';
import React from 'react';
import AppCard from '../../components/AppCard';
import { ISettings } from '../../lib/interfaces';
import userSettings from '../../userSettings.json';
import Styles from './Home.module.scss';

export default function Home() {
  function handleEdit(editDetails: ISettings) {
    const editWindow = new remote.BrowserWindow({
      show: false,
      minWidth: 400,
      width: 600,
      height: 450,
      minHeight: 300,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    // TODO: Test in Windows
    // eslint-disable-next-line promise/catch-or-return
    editWindow
      .loadURL(
        `file://${__dirname}/index.html#/edit?${new URLSearchParams(
          editDetails
        ).toString()}}`
      )
      // eslint-disable-next-line promise/always-return
      .then(() => {
        editWindow.show();
      });
  }

  function renderDefaultSettings() {
    return userSettings.defaults.locations.map(
      (location: string, i: number) => (
        <AppCard
          // eslint-disable-next-line react/no-array-index-key
          key={i}
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
    <div className={Styles.home}>
      <h2 className={Styles.home__heading}>Monitors</h2>
      <div className={Styles.home__settings}>{renderDefaultSettings()}</div>
      <hr className={Styles.home__hr} />
      <h2 className={Styles.home__heading}>Applications</h2>
      <div className={Styles.home__settings}>{renderApplicationSettings()}</div>
    </div>
  );
}
