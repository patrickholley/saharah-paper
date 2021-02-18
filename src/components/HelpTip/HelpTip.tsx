import React, { ReactNode, useRef, useState } from 'react';
import Icon, { IconType } from '../Icons';
import Tooltip from '../Tooltip';
import Styles from './HelpTip.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function HelpTip({ children, className }: IProps) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const helpTipRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    setIsTooltipActive(true);
  }

  function handleMouseLeave() {
    setIsTooltipActive(false);
  }

  return (
    <div
      className={`${Styles['help-tip']}${className ? ` ${className}` : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={helpTipRef}
    >
      <Tooltip anchorRef={helpTipRef} isActive={isTooltipActive}>
        {children}
      </Tooltip>
      <Icon iconType={IconType.HELP} />
    </div>
  );
}
