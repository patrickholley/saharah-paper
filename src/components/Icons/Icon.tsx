import React from 'react';
import AddIcon from './AddIcon';
import AlertIcon from './AlertIcon';
import CancelIcon from './CancelIcon';
import CoffeeIcon from './CoffeeIcon';
import DeleteIcon from './DeleteIcon';
import DollarIcon from './DollarIcon';
import EditIcon from './EditIcon';
import HelpIcon from './HelpIcon';
import ImageIcon from './ImageIcon';
import MonitorIcon from './MonitorIcon';
import SaveIcon from './SaveIcon';
import SettingsIcon from './SettingsIcon';

export enum IconType {
  ADD = 'add',
  ALERT = 'alert',
  CANCEL = 'cancel',
  COFFEE = 'coffee',
  EDIT = 'edit',
  DELETE = 'delete',
  DOLLAR = 'dollar',
  HELP = 'help',
  IMAGE = 'image',
  MONITOR = 'monitor',
  SAVE = 'save',
  SETTINGS = 'settings',
}

interface IProps {
  iconType: IconType;
}

export default function Icon({ iconType }: IProps) {
  switch (iconType) {
    case IconType.ADD:
      return <AddIcon />;
    case IconType.ALERT:
      return <AlertIcon />;
    case IconType.CANCEL:
      return <CancelIcon />;
    case IconType.COFFEE:
      return <CoffeeIcon />;
    case IconType.EDIT:
      return <EditIcon />;
    case IconType.DELETE:
      return <DeleteIcon />;
    case IconType.DOLLAR:
      return <DollarIcon />;
    case IconType.HELP:
      return <HelpIcon />;
    case IconType.IMAGE:
      return <ImageIcon />;
    case IconType.MONITOR:
      return <MonitorIcon />;
    case IconType.SAVE:
      return <SaveIcon />;
    case IconType.SETTINGS:
      return <SettingsIcon />;
    default:
      return null;
  }
}
