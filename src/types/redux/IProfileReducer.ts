import { IAppState } from './IAppState';
import { IProfileDetail } from '../profile';

export interface IProfileReducer extends IAppState {
  profileDetail: IProfileDetail | null;
}
