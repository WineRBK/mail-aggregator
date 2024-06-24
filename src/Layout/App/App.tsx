import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import MailProps from '../../Types/Mail.props';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import s from './App.module.scss';
import { fetchMails } from '../../api/api';

interface MailContextType {
  mails: MailProps[];
}

interface MailActiveContextType {
  activeMail: MailProps | null;
  setActiveMail: (mail: MailProps | null) => void;
}

export const MailContext = createContext<MailContextType | null>(null);
export const MailActiveContext = createContext<MailActiveContextType | null>(null);

const App: React.FC = () => {
  const [mails, setMails] = useState<MailProps[]>([]);
  const [activeMail, setActiveMail] = useState<MailProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMails = await fetchMails(); // Используем функцию fetchMails
      if (fetchedMails) {
        setMails(fetchedMails);
      }
    };

    fetchData();
  }, []);

  return (
    <MailActiveContext.Provider value={{ activeMail, setActiveMail }}>
      <MailContext.Provider value={{ mails }}>
        <div className={s.app}>
          <Header />
          <div className={s.container}>
            <Sidebar />
            <Main />
          </div>
        </div>
      </MailContext.Provider>
    </MailActiveContext.Provider>
  );
};

export default App;
