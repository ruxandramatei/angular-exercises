import { InjectionToken } from "@angular/core";
export const SHARED_STATE = new InjectionToken("shared_state");

export enum MODES{
    CREATE, EDIT
}

export class SharedState{
    constructor(public mode: MODES, public id?: number){

    }
}