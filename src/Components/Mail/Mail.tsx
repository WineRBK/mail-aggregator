import React, { FC } from 'react';
import cn from 'classnames';
import s from './Mail.module.scss';
import MailProps from '../../Types/Mail.props';
import useDateFormatter from '../../hooks/useDateFormatter';

interface MailComponentProps extends MailProps {
  onClick: () => void;
  isActive: boolean;
}

const Mail: FC<MailComponentProps> = ({
  senderName,
  date,
  title,
  messageContent,
  onClick,
  isActive,
}) => {
  const { getFormattedDate } = useDateFormatter();
  const dateFormat = new Date(date);
  const formattedDate = getFormattedDate(dateFormat);

  return (
    <li className={cn(s.mail, { [s.active]: isActive })} onClick={onClick}>
      <div className={s.mail__container}>
        <div className={s.mail__imageWrapper}>
          <img src="" alt="" />
        </div>
        <div className={s.mail__contentWrapper}>
          <div className={s.mail__firstRow}>
            <span className={s.mail__name}>{senderName}</span>
            <span className={s.mail__date}>{formattedDate}</span>
          </div>
          <div className={s.mail__secondRow}>
            <span className={s.mail__title}>{title}</span>
            <span className={s.mail__check}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#4578F7" />
              </svg>
            </span>
          </div>
          <div className={s.mail__lastRow}>
            <span className={s.mail__text}>{messageContent}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Mail;
