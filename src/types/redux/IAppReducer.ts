import { IAppState } from './IAppState';
import { IProfileTeaser, IProfileTeasers } from '../profile/IProfileTeaser';

export interface IAppReducer extends IAppState {
  page: number;
  profiles: IProfileTeasers;
  selectProfile: IProfileTeaser | null;
  likeProfile: IProfileTeaser | null;
}
