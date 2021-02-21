import React from 'react';
import { EditAppCard } from '../../components/AppCards';
import generateSettingId from '../../lib/utils/generateSettingId';

export default function Add() {
  return (
    <EditAppCard
      id={generateSettingId()}
      isAdding
      isMonitor={false}
      location=""
    />
  );
}
