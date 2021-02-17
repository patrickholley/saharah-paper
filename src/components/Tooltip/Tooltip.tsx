import React, { MutableRefObject, ReactNode, useEffect } from 'react';
import Styles from './Tooltip.module.scss';

interface IProps {
  anchorRef: MutableRefObject<HTMLDivElement>;
  className?: string;
  children: ReactNode;
  isActive: boolean;
  setIsActive(isActive: boolean): void;
}

export default function Tooltip({
  anchorRef,
  className,
  children,
  isActive,
  setIsActive,
}: IProps) {
  function onMouseEnterRef() {
    console.log('enter');
  }

  function onMouseLeaveRef() {
    console.log('leave');
  }

  useEffect(() => {
    anchorRef.current.addEventListener('mouseenter', onMouseEnterRef);
    anchorRef.current.addEventListener('mouseleave', onMouseLeaveRef);

    return () => {
      anchorRef.current.removeEventListener('mouseenter', onMouseEnterRef);
      anchorRef.current.removeEventListener('mouseleave', onMouseLeaveRef);
    };
  });

  return (
    <div
      className={`${Styles.tooltip}${isActive ? ` ${Styles.active}` : ''}${
        className ? ` ${className}` : ''
      }`}
    ></div>
  );
}
