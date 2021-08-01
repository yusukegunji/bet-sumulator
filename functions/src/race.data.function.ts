import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const countEvents = functions
  .region('asia-northeast1')
  .firestore.document('races/{raceId}')
  .onWrite((change) => {
    const newData = change.after.data();
    const FieldValue = admin.firestore.FieldValue;
    const countsRef = db.collection('venues').doc(newData.joId);

    if (!change.before.exists) {
      return countsRef.update({ raceCount: FieldValue.increment(1) });
    } else if (change.before.exists && !change.after.exists) {
      return countsRef.update({ raceCount: FieldValue.increment(-1) });
    }
    return null;
  });
