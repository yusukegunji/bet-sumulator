import { Yosoka } from './yosoka';

export interface Sheet {
  id: string;
  yosokaId: string;
  joId: string;
  uid: string;
  createdAt: firebase.default.firestore.Timestamp;
  updatedAt: firebase.default.firestore.Timestamp;
}

export interface SheetWithYosoka extends Sheet {
  yosoka: Yosoka;
}
