import React from 'react';
import { EditAppCard } from '../../components/AppCards';

export default function Edit() {
  const params = new URLSearchParams(global.location.hash.split('?')[1]);
  const location = params.get('location') as string;
  const name = params.get('name') as string;
  const process = params.get('process') as string;

  return <EditAppCard location={location} name={name} process={process} />;
}
