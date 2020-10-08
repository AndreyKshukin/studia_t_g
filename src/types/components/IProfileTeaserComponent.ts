import { IProfileTeaser } from '../profile/IProfileTeaser';

export interface IProfileTeaserComponent {
  profile: IProfileTeaser;
  openProfile: (profile: IProfileTeaser) => void;
}
