import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  constructor() {}
}

export const LANGUAGE = 'TypeScript';
export const FRAMEWORK = 'Ionic With Angular';

export enum GOOD_CONDUCT_TYPE {
  'DRAFT' = 1,
  'SUBMIT',
}

export const STR_REGX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gi;
export const NUM_REGX = /\d/g;
export const ALPHA_NUM_REGX = /^[a-zA-Z0-9]*$/;
export const MOB_REGX = /^\d{10,13}$/g;
export const ADDR_REGX = /^[a-zA-Z0-9 \-]*$/g;
