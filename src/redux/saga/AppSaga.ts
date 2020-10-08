import { put } from 'redux-saga/effects';

import { IAction, IProfileTeasers, IResponse } from '@types';
import { AppAction, UtilAction } from '@actions';
import { ProfileService } from '@services';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* getCharacters(action: IAction<number>) {
  try {
    const data: IResponse<IProfileTeasers> = yield ProfileService.getUsers(
      action.payload,
    );
    yield put({ type: AppAction.PROFILES_LOADED, payload: data.results });
  } catch (e) {
    yield put({ type: UtilAction.ERROR, error: 'Cannot load profile list' });
  }
}
