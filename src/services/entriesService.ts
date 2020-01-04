import { DaysmanDb } from '../database/DaysmanDb';
import { wait } from '../utils/wait';

const db = new DaysmanDb();
db.open();

export const getLastRunningEntry = async () => {
  try {
    return await db.entries.orderBy('start').last();
  } catch {
    db.open();
    return await db.entries.orderBy('start').last();
  }
};

export const getLastEntries = async () => {
  try {
    await wait(500);
    return await db.entries.orderBy('start').toArray();
  } catch {
    db.open();
    await wait(500);
    return await db.entries.orderBy('start').toArray();
  }
};
