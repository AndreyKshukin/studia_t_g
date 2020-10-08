import { takeEvery } from 'redux-saga/effects';
import { AppAction } from '@actions';
import { getCharacters } from './AppSaga';
import { ProfileAction } from '../actions/ProfileAction';
import { findProfile } from './ProfileSaga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* () {
  yield takeEvery(AppAction.GET_PROFILES, getCharacters);
  yield takeEvery(AppAction.REFRESH_PROFILE_LIST, getCharacters);
  yield takeEvery(ProfileAction.PROFILE_FETCH_DETAIL, findProfile);
}
