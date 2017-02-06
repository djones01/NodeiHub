import { Action } from '@ngrx/store';
import { Format } from '../models/format';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_FORMAT:             type('[Formats] Add Format'),
  ADD_FORMAT_SUCCESS:     type('[Formats] Add Format Success'),
  ADD_FORMAT_FAIL:        type('[Formats] Add Format Fail'),
  REMOVE_FORMAT:          type('[Formats] Remove Format'),
  REMOVE_FORMAT_SUCCESS:  type('[Formats] Remove Format Success'),
  REMOVE_FORMAT_FAIL:     type('[Formats] Remove Format Fail'),
  LOAD:                   type('[Formats] Load'),
  LOAD_SUCCESS:           type('[Formats] Load Success'),
  LOAD_FAIL:              type('[Formats] Load Fail'),
};


/**
 * Add Format to Formats Actions
 */
export class AddFormatAction implements Action {
  type = ActionTypes.ADD_FORMAT;

  constructor(public payload: Format) { }
}

export class AddFormatSuccessAction implements Action {
  type = ActionTypes.ADD_FORMAT_SUCCESS;

  constructor(public payload: Format) { }
}

export class AddFormatFailAction implements Action {
  type = ActionTypes.ADD_FORMAT_FAIL;

  constructor(public payload: Format) { }
}


/**
 * Remove Format from Formats Actions
 */
export class RemoveFormatAction implements Action {
  type = ActionTypes.REMOVE_FORMAT;

  constructor(public payload: Format) { }
}

export class RemoveFormatSuccessAction implements Action {
  type = ActionTypes.REMOVE_FORMAT_SUCCESS;

  constructor(public payload: Format) { }
}

export class RemoveFormatFailAction implements Action {
  type = ActionTypes.REMOVE_FORMAT_FAIL;

  constructor(public payload: Format) { }
}

/**
 * Load Formats Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Format[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddFormatAction
  | AddFormatSuccessAction
  | AddFormatFailAction
  | RemoveFormatAction
  | RemoveFormatSuccessAction
  | RemoveFormatFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

