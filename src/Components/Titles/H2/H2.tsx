import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './H2.module.scss';

interface H2Props {
  children: ReactNode;
  ClassName?: string;
}

const H2: FC<H2Props> = ({ children, ClassName = '' }) => {
  return <h2 className={cn(s.h2, ClassName)}>{children}</h2>;
};

export default H2;
