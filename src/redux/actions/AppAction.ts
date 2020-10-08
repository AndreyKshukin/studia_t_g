import { IAction, IProfileTeaser } from '@types';

export const AppAction = {
  GET_PROFILES: 'AppAction.GET_PROFILES',
  PROFILES_LOADED: 'AppAction.PROFILES_LOADED',
  SHOW_PROFILE_LIST: 'AppAction.SHOW_PROFILE_LIST',
  SHOW_PROFILE_DETAIL: 'AppAction.SHOW_PROFILE_DETAIL',
  REFRESH_PROFILE_LIST: 'AppAction.REFRESH_PROFILE_LIST',

  getProfiles: (page: number): IAction<number> => getProfiles(page),
  refreshProfileList: (): IAction<number> => refreshProfileList(),
  unsetSelectProfile: (): IAction<void> => unsetSelectProfile(),

  setSelectProfile: (profile: IProfileTeaser): IAction<IProfileTeaser> =>
    setSelectProfile(profile),
};

const getProfiles = (page: number): IAction<number> => {
  return {
    payload: page,
    type: AppAction.GET_PROFILES,
  };
};

const refreshProfileList = (): IAction<number> => {
  return {
    payload: 1,
    type: AppAction.REFRESH_PROFILE_LIST,
  };
};

const setSelectProfile = (profile: IProfileTeaser): IAction<IProfileTeaser> => {
  return {
    payload: profile,
    type: AppAction.SHOW_PROFILE_DETAIL,
  };
};

const unsetSelectProfile = (): IAction<void> => {
  return {
    payload: undefined,
    type: AppAction.SHOW_PROFILE_LIST,
  };
};
