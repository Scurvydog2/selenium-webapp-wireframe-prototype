import { IStep } from './IStep';

export interface IModule {
    Name:string;
    ID:number;
    steps?:IStep[];
    Level:number;

  }