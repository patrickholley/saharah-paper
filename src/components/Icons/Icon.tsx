import React from 'react';
import AddIcon from './AddIcon';
import CancelIcon from './CancelIcon';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';
import HelpIcon from './HelpIcon';
import ImageIcon from './ImageIcon';
import SaveIcon from './SaveIcon';

export enum IconType {
  ADD = 'add',
  CANCEL = 'cancel',
  EDIT = 'edit',
  DELETE = 'delete',
  HELP = 'help',
  IMAGE = 'image',
  SAVE = 'save',
}

interface IProps {
  iconType: IconType;
}

export default function Icon({ iconType }: IProps) {
  switch (iconType) {
    case IconType.ADD:
      return <AddIcon />;
    case IconType.CANCEL:
      return <CancelIcon />;
    case IconType.EDIT:
      return <EditIcon />;
    case IconType.DELETE:
      return <DeleteIcon />;
    case IconType.HELP:
      return <HelpIcon />;
    case IconType.IMAGE:
      return <ImageIcon />;
    case IconType.SAVE:
      return <SaveIcon />;
    default:
      return null;
  }
}
