import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const countRaces = functions
  .region('asia-northeast1')
  .firestore.document('races/{raceId}')
  .onWrite((change) => {
    const newData = change.after.data();
    functions.logger.info('newData=>', newData);
    const FieldValue = admin.firestore.FieldValue;
    functions.logger.info('fieldValue=>', FieldValue);

    const countsRef = db.collection('venues').doc(newData.joId);

    functions.logger.info(change.before.exists);
    functions.logger.info(change.after.exists);

    if (!change.before.exists) {
      return countsRef.update({ raceCount: FieldValue.increment(1) });
    } else if (change.before.exists && !change.after.exists) {
      return countsRef.update({ raceCount: FieldValue.increment(-1) });
    }
    return null;
  });
