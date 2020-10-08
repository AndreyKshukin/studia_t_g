import { IAction, IProfileDetail, IProfileTeaser } from '@types';

export const ProfileAction = {
  INITIAL_DETAIL: 'ProfileAction.INITIAL_DETAIL',
  PROFILE_FETCHED: 'ProfileAction.PROFILE_FETCHED',
  PROFILE_FETCH_DETAIL: 'ProfileAction.PROFILE_FETCH_DETAIL',

  fetchDetail: (profile: IProfileTeaser): IAction<IProfileTeaser> =>
    fetchDetail(profile),
  initialDeal: (profile: IProfileDetail): IAction<IProfileDetail> =>
    initialDeal(profile),
};

const fetchDetail = (profile: IProfileTeaser): IAction<IProfileTeaser> => {
  return {
    payload: profile,
    type: ProfileAction.PROFILE_FETCH_DETAIL,
  };
};

const initialDeal = (profile: IProfileDetail): IAction<IProfileDetail> => {
  return {
    payload: profile,
    type: ProfileAction.INITIAL_DETAIL,
  };
};
