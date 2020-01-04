import { createStore } from 'easy-peasy';
import { StoreModel, model } from './model';

export const makeStore = (initialState: StoreModel) => {
  const store = createStore<StoreModel>(model, { name: 'Global store', initialState });

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./model', () => {
        store.reconfigure(model);
      });
    }
  }

  return store;
};
