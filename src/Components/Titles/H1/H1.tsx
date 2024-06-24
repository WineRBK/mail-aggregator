import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './H1.module.scss';

interface H1Props {
  children: ReactNode;
  ClassName?: string;
}

const H1: FC<H1Props> = ({ children, ClassName = '' }) => {
  return <h1 className={cn(s.h1, ClassName)}>{children}</h1>;
};

export default H1;
