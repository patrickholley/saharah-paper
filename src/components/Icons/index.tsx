import React from 'react';
import AddIcon from './AddIcon';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';

interface IProps {
  icon: string;
}

export default function Icon({ icon }: IProps) {
  switch (icon) {
    case 'add':
      return <AddIcon />;
    case 'edit':
      return <EditIcon />;
    case 'delete':
      return <DeleteIcon />;
    default:
      return null;
  }
}
