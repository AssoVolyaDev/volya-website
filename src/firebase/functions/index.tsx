import { httpsCallable } from 'firebase/functions';

import { functions } from '../index';
import * as Constants from '../../constants';
import * as NotificationUtils from '../../utils/notificationUtils';

export const contact = (
  lastName: string,
  firstName: string,
  email: string,
  subject: string,
  message: string,
  callback: () => void,
  errorCallback: () => void
): void => {
  const contactFunction = httpsCallable(functions, 'contact');
  contactFunction({ lastName, firstName, email, subject, message })
    .then(() => {
      callback();
    })
    .catch((error) => {
      // Getting the Error details.
      const code = error.code;

      if (code === 'functions/invalid-argument') {
        // TODO : i18n
        NotificationUtils.handleMessage(
          `Une erreur technique est survenue lors de l'envoi du formulaire. ${Constants.CONTACT_MESSAGE}`
        );
      } else {
        // TODO : i18n
        NotificationUtils.handleError(
          `Une erreur inconnue est survenue lors de l'envoi du formulaire. ${Constants.CONTACT_MESSAGE}`
        );
      }

      errorCallback();
    });
};
