import { IAppReducer } from './IAppReducer';
import { IProfileReducer } from './IProfileReducer';

export interface IAppStore {
  appModule: IAppReducer;
  profileModule: IProfileReducer;
}
