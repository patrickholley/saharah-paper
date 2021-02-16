import React from 'react';
import AddIcon from './AddIcon';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';

export enum IconType {
  ADD = 'add',
  EDIT = 'edit',
  DELETE = 'delete',
}

interface IProps {
  iconType: IconType;
}

export default function Icon({ iconType }: IProps) {
  switch (iconType) {
    case IconType.ADD:
      return <AddIcon />;
    case IconType.EDIT:
      return <EditIcon />;
    case IconType.DELETE:
      return <DeleteIcon />;
    default:
      return null;
  }
}
