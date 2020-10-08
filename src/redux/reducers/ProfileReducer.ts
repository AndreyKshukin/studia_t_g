import { DataState, IAction, IProfileDetail, IProfileReducer } from '@types';
import { UtilAction } from '../actions/';
import { ProfileAction } from '../actions/ProfileAction';

//Инициализация начального состония подробного просмотра персонажа
const initState: IProfileReducer = {
  profileDetail: null,
  state: DataState.initial,
  errorMessage: '',
};

export function ProfileReducer(
  state: IProfileReducer = initState,
  action: IAction<IProfileDetail>,
): IProfileReducer {
  switch (action.type) {
    case ProfileAction.INITIAL_DETAIL:
      return {
        ...state,
        state: DataState.loaded,
        profileDetail: action.payload,
        errorMessage: '',
      };
    case ProfileAction.PROFILE_FETCH_DETAIL:
      return {
        ...state,
        state: DataState.loading,
        errorMessage: '',
      };

    case ProfileAction.PROFILE_FETCHED:
      return {
        ...state,
        profileDetail: action.payload,
        state: DataState.loaded,
        errorMessage: '',
      };

    case UtilAction.ERROR:
      return {
        ...state,
        state: DataState.error,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
