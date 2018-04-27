import { createSelector } from 'reselect';

export const getApp = state => state.app;
export const getCredentials = createSelector([getApp], app => app.credentials);
