import React from 'react';

const defaultValue = {
  locale: 'fr',
  // eslint-disable-next-line prettier/prettier
  setLocale: (locale: string) => { }
};

export default React.createContext(defaultValue);
