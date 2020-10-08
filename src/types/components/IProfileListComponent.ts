import { IProfileTeaser, IProfileTeasers } from '../profile/IProfileTeaser';
import { DataState } from '../redux/IAppState';

export interface IProfileListComponent {
  profiles: IProfileTeasers;
  openProfile: (profile: IProfileTeaser) => void;
  refreshListProfile: () => void;
  getProfiles: () => void;
  loadState: DataState;
}
