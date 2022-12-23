import Cookies from 'js-cookie';

import type { UserType } from '../types/userType';

class CookieStorage<D> {
  key: string;

  defaultValue: D | null;

  constructor(key: string, defaultValue?: D) {
    this.key = key;
    this.defaultValue = defaultValue ?? null;
  }

  set(data: D) {
    Cookies.set(this.key, JSON.stringify(data));
  }

  get(): D | null {
    try {
      const storedItem = Cookies.get(this.key);
      const parsedItem = JSON.parse(storedItem as string);

      return parsedItem || this.defaultValue;
    } catch (error) {
      return this.defaultValue;
    }
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

const storage = {
  user: new CookieStorage<UserType>('user', {}),
  token: new CookieStorage<string>('token', ''),
};

export default CookieStorage;
