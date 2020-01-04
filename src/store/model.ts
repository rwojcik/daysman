import { Entry } from '../database/DaysmanDb';
import { Action, Thunk, action, thunk, Computed, computed } from 'easy-peasy';
import { extractError } from '../utils/extractError';
import { getLastEntries } from '../services/entriesService';
import { createTypedHooks } from 'easy-peasy';

export interface EntriesModel {
  entries: Entry[];
  errors: string[];
  fetching: boolean;

  lastRunningEntry: Computed<EntriesModel, Entry | null>;

  startFetch: Action<EntriesModel>;
  saveEntries: Action<EntriesModel, EntriesModel['entries']>;
  saveError: Action<EntriesModel, string[]>;

  fetchEntries: Thunk<EntriesModel>;
}

export interface StoreModel {
  entries: EntriesModel;
}

export const model: StoreModel = {
  entries: {
    entries: [],
    errors: [],
    fetching: false,

    lastRunningEntry: computed((state) =>
      state.entries
        .filter((e) => e.end == null)
        .reduce<Entry | null>((prev, curr) => {
          if (prev == null || prev.start < curr.start) {
            return curr;
          }

          return prev;
        }, null)
    ),

    startFetch: action((state) => {
      state.errors = [];
      state.fetching = true;
    }),

    saveEntries: action((state, payload) => {
      state.errors = [];
      state.fetching = false;
      state.entries = payload;
    }),

    saveError: action((state, payload) => {
      state.errors = [];
      state.fetching = false;
      state.errors = payload;
    }),

    fetchEntries: thunk(async (actions, _, { getState }) => {
      if (getState().fetching) {
        return;
      }

      actions.startFetch();

      try {
        actions.saveEntries(await getLastEntries());
      } catch (err) {
        actions.saveError(extractError(err));
      }
    }),
  },
};

export const globalStore = createTypedHooks<StoreModel>();
