import { IProfileTeaser } from './IProfileTeaser';

export interface IProfileDetail extends IProfileTeaser {
  phone: string;

  dob: {
    date: string;
    age: string;
  };
}
