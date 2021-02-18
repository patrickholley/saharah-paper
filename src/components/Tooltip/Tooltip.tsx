import React, { ReactNode, RefObject } from 'react';
import Styles from './Tooltip.module.scss';

interface IProps {
  anchorRef: RefObject<HTMLDivElement>;
  className?: string;
  children: ReactNode;
  isActive: boolean;
}

export default function Tooltip({
  anchorRef,
  className,
  children,
  isActive,
}: IProps) {
  return (
    <div
      className={`${Styles.tooltip}${isActive ? ` ${Styles.active}` : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{
        transform: `translateX(calc(-50% + ${
          (anchorRef.current?.offsetWidth || 0) / 2
        }px))`,
      }}
    >
      {children}
    </div>
  );
}
