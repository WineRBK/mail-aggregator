const useDateFormatter = () => {
  const standardTimeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  const bigTimeOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const isYesterday = (date: Date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  };

  const isWithinLastWeek = (date: Date) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return date >= oneWeekAgo;
  };

  const isWithinTwoWeeks = (date: Date) => {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return date >= twoWeeksAgo;
  };

  const getFormattedDate = (date: Date, useBigFormat: boolean) => {
    if (useBigFormat) {
      return `${date.toLocaleDateString([], bigTimeOptions)} в ${date.toLocaleTimeString(
        [],
        standardTimeOptions,
      )}`;
    }

    if (isYesterday(date)) {
      return 'вчера';
    }
    if (isWithinLastWeek(date)) {
      return date.toLocaleTimeString([], standardTimeOptions);
    }
    if (isWithinTwoWeeks(date)) {
      return 'неделю назад';
    }
    return date.toLocaleDateString([], { month: 'long', day: 'numeric' });
  };

  return {
    getFormattedDate,
  };
};

export default useDateFormatter;
