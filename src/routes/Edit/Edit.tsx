import React from 'react';
import { EditAppCard } from '../../components/AppCards';

export default function Edit() {
  const params = new URLSearchParams(global.location.hash.split('?')[1]);
  const id = Number(params.get('id') as string);
  const isMonitor = (params.get('isMonitor') as string) === 'true';
  const location = params.get('location') as string;
  const name = params.get('name') as string;
  const process = params.get('process') as string;

  return (
    <EditAppCard
      id={id}
      isMonitor={isMonitor}
      location={location}
      name={name}
      process={process}
    />
  );
}
