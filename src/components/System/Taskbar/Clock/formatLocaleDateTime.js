const LocaleTimeDate = {
  date: "",
  dateTime: "",
  time: "",
};

const DEFAULT_LOCALE = "en";

const dateFormat = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const timeFormat = {
  hour: "numeric",
  hour12: true,
  minute: "2-digit",
  second: "2-digit",
};

const dayFormat = {
  weekday: "long",
};

export const formatLocaleDateTime = (now) => {
  const date = new Intl.DateTimeFormat(DEFAULT_LOCALE, dateFormat).format(now);
  const day = new Intl.DateTimeFormat(DEFAULT_LOCALE, dayFormat).format(now);
  const time = new Intl.DateTimeFormat(DEFAULT_LOCALE, timeFormat).format(now);

  return {
    date: `${date}\n${day}`,
    dateTime: now.toISOString(),
    time,
  };
};

export { LocaleTimeDate };
