const storageItem = {
  get() {
    const data = localStorage.getItem('deviceId');
    return data;
  },
  set(value: string) {
    localStorage.setItem('deviceId', value);
  },
};

export default storageItem;
