import { IAction, IAppReducer, DataState, IProfileTeaser } from '@types';
import { AppAction, UtilAction } from '../actions';

const initState: IAppReducer = {
  profiles: new Map(),
  page: 1,
  selectProfile: null,
  likeProfile: null,
  state: DataState.initial,
  errorMessage: '',
};

export const AppReducer = (
  state: IAppReducer = initState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: IAction<any>,
): IAppReducer => {
  switch (action.type) {
    case AppAction.GET_PROFILES:
      return {
        ...state,
        state: DataState.loading,
        errorMessage: '',
      };

    case AppAction.PROFILES_LOADED:
      // eslint-disable-next-line no-case-declarations
      const isRefresh = state.state === DataState.refreshing;
      if (isRefresh) {
        state.profiles.clear();
      }
      action.payload.forEach((profile: IProfileTeaser) => {
        const id = profile.email + profile.id.value;
        state.profiles.set(id, profile);
      });
      return {
        ...state,
        page: isRefresh ? 1 : state.page + 1,
        state: DataState.loaded,
        errorMessage: '',
      };

    case AppAction.SHOW_PROFILE_LIST:
      return {
        ...state,
        state: DataState.loaded,
        selectProfile: null,
        likeProfile: null,
      };

    case AppAction.SHOW_PROFILE_DETAIL:
      return {
        ...state,
        selectProfile: action.payload,
        // state: DataState.loading,
        errorMessage: '',
      };

    case AppAction.REFRESH_PROFILE_LIST:
      return {
        ...state,
        state: DataState.refreshing,
        selectProfile: null,
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
};
