import React, { useRef, useState } from 'react';
import Icon, { IconType } from '../Icons';
import Tooltip from '../Tooltip';
import Styles from './HelpTip.module.scss';

interface IProps {
  className?: string;
}

export default function HelpTip({ className }: IProps) {
  const [isHovering, setIsHovering] = useState(false);
  const iconRef = useRef(document.createElement('div'));

  return (
    <div
      className={`${Styles['help-tip']}${className ? ` ${className}` : ''}`}
      ref={iconRef}
    >
      <Tooltip anchorRef={iconRef}>Hello World</Tooltip>
      <Icon iconType={IconType.HELP} />
    </div>
  );
}
