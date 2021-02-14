import { remote } from 'electron';
import path from 'path';
import React from 'react';
import AppCard from '../../components/AppCard';
import { ISettings } from '../../lib/interfaces';
import userSettings from '../../userSettings.json';
import Styles from './Home.module.scss';

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
        nodeIntegration: true,
      },
    });

    // TODO: Test in Windows
    editWindow.loadURL(`file://${__dirname}/index.html#/edit`);

    editWindow.once('ready-to-show', () => {
      editWindow.show();
    });
  }

  function renderDefaultSettings() {
    return userSettings.defaults.locations.map(
      (location: string, i: number) => (
        // eslint-disable-next-line react/jsx-key
        <AppCard
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
