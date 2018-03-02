import { createSelector } from 'reselect';

export const getApp = state => state.app;
export const getMessage = createSelector(
  [getApp],
  app => app.message,
);
