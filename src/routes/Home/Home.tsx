import React from 'react';
import ApplicationCard from '../../components/ApplicationCard';
import userSettings from '../../userSettings.json';
import './Home.scss';

export default function Home() {
  function renderDefaultSettings() {
    return userSettings.defaults.locations.map((location: string) => (
      <ApplicationCard key={location} location={location} />
    ));
  }

  return <div>{renderDefaultSettings()}</div>;
}
