import { BrowserWindow, remote } from 'electron';
import React from 'react';
import AppCard from '../../components/AppCard';
import userSettings from '../../userSettings.json';
import Styles from './Home.scss';

export interface ISettings {
  name: string;
  location: string;
  process?: string;
}

export default function Home() {
  function handleEdit(editDetails: ISettings) {
    /** work on this */
    const editWindow = new remote.BrowserWindow({
      show: false,
      minWidth: 400,
      width: 600,
      height: 450,
      minHeight: 300,
      webPreferences: {
        enableRemoteModule: true,
        nodeIntegration: true,
      },
    });

    editWindow.loadURL(
      'https://stackoverflow.com/questions/37884130/electron-remote-is-undefined'
    );
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
    <div>
      <div className={Styles.home__settings}>{renderDefaultSettings()}</div>
      <div className={Styles.home__settings}>{renderApplicationSettings()}</div>
    </div>
  );
}
