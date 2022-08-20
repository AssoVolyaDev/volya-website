import React from "react";

const defaultValue = {
  locale: 'en',
  setLocale: (locale: string) => { }
}

export default React.createContext(defaultValue);