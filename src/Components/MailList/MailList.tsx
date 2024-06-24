import React, { FC, useContext } from 'react';
import { MailActiveContext } from '../../Layout/App/App';
import MailProps from '../../Types/Mail.props';
import Mail from '../Mail/Mail';
import H2 from '../Titles/H2/H2';
import s from './MailList.module.scss';

interface MailListProps {
  mails: MailProps[];
}

const MailList: FC<MailListProps> = ({ mails }) => {
  const context = useContext(MailActiveContext);

  if (!context) {
    throw new Error('MailActiveContext must be used within a MailActiveProvider');
  }

  const { activeMail, setActiveMail } = context;

  const changeMail = (item: MailProps) => {
    setActiveMail(item);
  };

  return (
    <ul className={s.list}>
      {mails && mails.length > 0 ? (
        mails.map((item) => (
          <Mail
            key={item.date}
            onClick={() => changeMail(item)}
            isActive={activeMail?.id === item.id}
            {...item}
          />
        ))
      ) : (
        <li className={s.list__empty}>
          <H2>Писем не найдено</H2>
        </li>
      )}
    </ul>
  );
};

export default MailList;
