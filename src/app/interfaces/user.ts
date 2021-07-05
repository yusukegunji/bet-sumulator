export interface User {
  name: string;
  photoURL: string;
  uid: string;
  email: string;
  createdAt: firebase.default.firestore.Timestamp;
}
