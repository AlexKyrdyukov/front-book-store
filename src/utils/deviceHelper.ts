import { v4 } from 'uuid';
import storageItem from './storageHelper';

const getDeviceId = () => {
  const deviceId = storageItem.get();
  if (!deviceId) {
    const newId = v4();
    storageItem.set(newId);
    return newId;
  }
  return deviceId;
};

export default getDeviceId;
