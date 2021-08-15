import { getCurrentUser } from '../auth';
import { subscribToReservations } from './subscribeToReservation';

export const subscribeToCurrentUserReservations = (cb) => {
  const currentUser = getCurrentUser();
  if (!currentUser) return cb([]);
  return subscribToReservations(currentUser.id, cb);
};
