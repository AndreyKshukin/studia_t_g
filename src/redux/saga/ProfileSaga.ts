import { put } from 'redux-saga/effects';
import { IAction, IProfileDetail, IProfileTeaser, IResponse } from '@types';

import { ProfileService } from '@services';
import { UtilAction } from '../actions';
import { ProfileAction } from '../actions/ProfileAction';

//Обработка данных для получения подробной иформации в профиле
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* findProfile(action: IAction<IProfileTeaser>) {
  try {
    const data: IResponse<IProfileDetail[]> = yield ProfileService.fetchByItem(
      action.payload,
    );
    yield put({
      type: ProfileAction.PROFILE_FETCHED,
      payload: data.results[0],
    });
  } catch (e) {
    yield put({ type: UtilAction.ERROR, error: 'Cannot load profile' });
  }
}
