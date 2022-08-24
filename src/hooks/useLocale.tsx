import { useContext } from 'react';
import LocaleContext from '../LocaleContext';

const useLocale = (): { locale: string; shortLocale: string } => {
  const { locale } = useContext(LocaleContext);

  return { locale, shortLocale: locale.split('-')[0] };
};

export default useLocale;
