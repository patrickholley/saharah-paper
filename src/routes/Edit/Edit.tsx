import React from 'react';
import AppCard from '../../components/AppCard';

export default function Edit() {
  const params = new URLSearchParams(global.location.hash.split('?')[1]);
  const location = params.get('location');
  const name = params.get('name');
  const process = params.get('process');

  return <AppCard isEditing location={params.get('location')} />;
}
