import React from 'react';
import AppCard from '../../components/AppCard';

export default function Edit() {
  const params = new URLSearchParams(global.location.hash.split('?')[1]);
  const location = params.get('location') as string;
  const name = params.get('name') as string;
  const process = params.get('process') as string;

  return (
    <AppCard isEditing location={location} name={name} process={process} />
  );
}
