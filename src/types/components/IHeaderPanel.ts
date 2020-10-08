import { IProfileTeaser, IProfileTeasers } from '../profile';

export interface IHeaderPanel {
  profiles: IProfileTeasers;
  isLoading: boolean;
  refreshListProfile: () => void;
  openProfile: (profile: IProfileTeaser) => void;
}
