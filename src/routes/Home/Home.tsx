import React from 'react';
import AppCard from '../../components/AppCard';
import userSettings from '../../userSettings.json';
import Styles from './Home.scss';

export default function Home() {
  interface ISettings {
    location: string;
    name: string;
    process: string;
  }

  function renderDefaultSettings() {
    return userSettings.defaults.locations.map(
      (location: string, i: number) => (
        <AppCard
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isEditing={false}
          location={location}
          name={`Monitor ${i + 1}`}
        />
      )
    );
  }

  function renderApplicationSettings() {
    return userSettings.applications.map(
      ({ location, name, process }: ISettings) => (
        <AppCard
          key={process}
          isEditing={false}
          location={location}
          name={name}
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
