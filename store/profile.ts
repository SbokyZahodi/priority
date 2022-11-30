import { makeAutoObservable } from "mobx";
class Profile {
  userID: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserID(id: number) {
    this.userID = id;
  }
}
export default new Profile();
