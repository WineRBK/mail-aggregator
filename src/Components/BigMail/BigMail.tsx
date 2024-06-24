import React, { useContext, useEffect, useState } from 'react';
import { MailActiveContext } from '../../Layout/App/App';
import s from './BigMail.module.scss';
import ButtonsContainer from './Components/ButtonsContainer/ButtonsContainer';
import MailProps from '../../Types/Mail.props';
import useDateFormatter from '../../hooks/useDateFormatter';
import H1 from '../Titles/H1/H1';
import NoMessageIcon from '../../Images/svg/NoMessageIcon/NoMessageIcon';

const BigMail = () => {
  const { activeMail }: { activeMail: MailProps | null } = useContext(MailActiveContext);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const { getFormattedDate } = useDateFormatter();

  useEffect(() => {
    if (activeMail) {
      const dateFormat = new Date(activeMail.date);
      const formatted = getFormattedDate(dateFormat, true);
      setFormattedDate(formatted);
    } else {
      setFormattedDate(null);
    }
  }, [activeMail, getFormattedDate]);

  if (!activeMail) {
    return (
      <div className={s.bigMail}>
        <ButtonsContainer />
        <div className={s.bigMail__empty}>
          <NoMessageIcon />
          <H1>Выберите письмо</H1>
        </div>
      </div>
    );
  }

  return (
    <div className={s.bigMail}>
      <ButtonsContainer />
      <div className={s.bigMail__content}>
        <div className={s.bigMail__header}>
          <img src="avatar.jpg" alt="Avatar" className={s.bigMail__avatar} />
          <div className={s.bigMail__senderInfo}>
            <div className={s.bigMail__senderName}>{activeMail.senderName}</div>
            <div className={s.bigMail__recipient}>{activeMail.recipient}</div>
          </div>
          <div className={s.bigMail__date}>{formattedDate}</div>
        </div>
        <div className={s.bigMail__title}>{activeMail.title}</div>
        <div className={s.bigMail__messageContent}>{activeMail.messageContent}</div>
      </div>
    </div>
  );
};

export default BigMail;
