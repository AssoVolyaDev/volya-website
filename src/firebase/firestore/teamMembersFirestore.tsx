import { collection, onSnapshot, Unsubscribe } from 'firebase/firestore';

import { db } from '../index';
import * as Types from '../../types';
import * as Constants from '../../constants';
import * as NotificationUtils from '../../utils/notificationUtils';

// TODO : faire un repo github avec la conf firebase et les scripts associés : un fichier propre des rules, une fonction de contact

export const subscribeToTeamMembers = (
  callback: (cities: Types.TeamMember[]) => void
): Unsubscribe => {
  const unsubscribe = onSnapshot(
    collection(db, 'teamMembers'),
    (querySnapshot) => {
      callback(querySnapshot.docs.map((doc) => doc.data() as Types.TeamMember));
    },
    (error) => {
      console.error(error);
      // TODO i18n
      NotificationUtils.handleError(
        `Une erreur est survenue lors de la récupération de l&amp;équipes. ${Constants.CONTACT_MESSAGE}`
      );
    }
  );

  return unsubscribe;
};
