import React, { FC, ReactNode } from 'react';
import s from './ContainerContent.module.scss';

interface ContainerContentProps {
  children: ReactNode;
}

const ContainerContent: FC<ContainerContentProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default ContainerContent;
