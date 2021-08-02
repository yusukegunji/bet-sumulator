import { Jo } from './jo';
import { User } from './user';
import { Yosoka } from './yosoka';

export interface Sheet {
  id: string;
  yosokaId: string;
  joId: number;
  createdUid: string;
  updatedUid: string;
  createdAt: firebase.default.firestore.Timestamp;
  updatedAt: firebase.default.firestore.Timestamp;
}

export interface SheetWithYosoka extends Sheet {
  yosoka: Yosoka;
}

export interface SheetWithUser extends Sheet {
  createdUser: User;
  updatedUser: User;
}

export interface SheetWithUserWithYosoka extends Sheet {
  createdUser: User;
  updatedUser: User;
  yosoka: Yosoka;
}

export interface SheetWithUserWithYosokaWithJo extends Sheet {
  createdUser: User;
  updatedUser: User;
  yosoka: Yosoka;
  jo: Jo;
}
