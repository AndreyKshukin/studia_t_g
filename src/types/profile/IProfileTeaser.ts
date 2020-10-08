import { IName } from './IName';

export declare type IProfileTeasers = Map<string, IProfileTeaser>;

export interface IProfileTeaser {
  id: {
    name: string;
    value: string | null;
  };

  name: IName;

  email: string;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
