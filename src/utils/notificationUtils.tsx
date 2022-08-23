import { toast } from 'react-toastify';

export const handleMessage = (message: string): void => {
  toast(message, { type: toast.TYPE.INFO });
};

export const handleError = (message: string): void => {
  toast(message, { type: toast.TYPE.ERROR, autoClose: false });
  // TODO : intégration de crashlytics
};
