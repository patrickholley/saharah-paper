import React from 'react';

export default function Edit() {
  const params = new URLSearchParams(global.location.hash.split('?')[1]);

  return <div>{params.get('name')}</div>;
}
