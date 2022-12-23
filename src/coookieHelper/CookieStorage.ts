import Cookies from 'js-cookie';

class CookieStorage<D> {
  key: string;

  defaultValue: D | undefined;

  constructor(key: string, defaultValue?: D) {
    this.key = key;
    this.defaultValue = defaultValue ?? undefined;
  }

  set(data: D) {
    Cookies.set(this.key, data as string);
  }

  get(): string | D | undefined {
    try {
      const storedItem = Cookies.get(this.key);

      return storedItem || this.defaultValue;
    } catch (error) {
      return this.defaultValue;
    }
  }

  remove() {
    Cookies.remove(this.key);
  }
}

const storage = {
  token: new CookieStorage<string>('token'),
};

export default storage;
