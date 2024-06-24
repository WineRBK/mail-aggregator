import React, { useContext, useEffect, useState } from 'react';
import Search from '../../Components/Search/Search';
import s from './Sidebar.module.scss';
import MailList from '../../Components/MailList/MailList';
import { MailContext } from '../App/App';
import MailProps from '../../Types/Mail.props';

const Sidebar = () => {
  const { mails } = useContext(MailContext);
  const [filteredMails, setFilteredMails] = useState<MailProps[] | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  const handleText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (!mails) return; // Добавляем проверку наличия данных

    if (searchText === '') {
      setFilteredMails(mails);
    } else {
      setFilteredMails(
        mails.filter(
          (mail) =>
            mail.senderName.toLowerCase().includes(searchText.toLowerCase()) ||
            mail.title.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }
  }, [searchText, mails]);

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebar__searchWrapper}>
        <span className={s.sidebar__allMails}>
          {mails ? `${mails.length} Messages, ${mails.length} Unread` : 'Loading...'}
        </span>
        <Search handleText={handleText} />
      </div>
      <div className={s.sidebar__mailsWrapper}>
        <MailList mails={searchText !== '' ? filteredMails || [] : mails || []} />
      </div>
    </aside>
  );
};

export default Sidebar;
