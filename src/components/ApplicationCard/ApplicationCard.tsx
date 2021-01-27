import React from 'react';
import './ApplicationCard.scss';

interface IProps {
  location: string;
}

export default function ApplicationCard({ location }: IProps) {
  return (
    <div>
      <img alt={`File location: ${location}`} src={location} />
    </div>
  );
}
