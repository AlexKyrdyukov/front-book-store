import Cookies from 'js-cookie';

class CookieStorage<D> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  set(data: D) {
    Cookies.set(this.key, data as string);
  }

  get(): string | undefined {
    return Cookies.get(this.key);
  }

  remove() {
    Cookies.remove(this.key);
  }
}

const storage = {
  access: new CookieStorage<string>('access'),
  refresh: new CookieStorage<string>('refresh'),
};

export default storage;
