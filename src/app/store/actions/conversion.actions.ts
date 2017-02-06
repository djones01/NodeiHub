import { Action } from '@ngrx/store';
import { Conversion } from '../models/conversion';
import { Format } from '../models/format';
import { Map } from '../models/map';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_FORMAT:                               type('[Conversion] Add Format'),
  ADD_FORMAT_SUCCESS:                       type('[Conversion] Add Format Success'),
  ADD_FORMAT_FAIL:                          type('[Conversion] Add Format Fail'),
  ADD_MAP:                                  type('[Conversion] Add Map'),
  ADD_MAP_SUCCESS:                          type('[Conversion] Add Map Success'),
  ADD_MAP_FAIL:                             type('[Conversion] Add Map Fail'),
  REMOVE_FORMAT:                            type('[Conversion] Remove Format'),
  REMOVE_FORMAT_SUCCESS:                    type('[Conversion] Remove Format Success'),
  REMOVE_FORMAT_FAIL:                       type('[Conversion] Remove Format Fail'),
  REMOVE_MAP:                               type('[Conversion] Remove Map'),
  REMOVE_MAP_SUCCESS:                       type('[Conversion] Remove Map Success'),
  REMOVE_MAP_FAIL:                          type('[Conversion] Remove Map Fail'),
  LOAD:                                     type('[Conversion] Load'),
  LOAD_SUCCESS:                             type('[Conversion] Load Success'),
  LOAD_FAIL:                                type('[Conversion] Load Fail'),
};


/**
 * Add Format to Conversion Actions
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
 * Add Map to Conversion Actions
 */
export class AddMapAction implements Action {
  type = ActionTypes.ADD_MAP;

  constructor(public payload: Map) { }
}

export class AddMapSuccessAction implements Action {
  type = ActionTypes.ADD_MAP_SUCCESS;

  constructor(public payload: Map) { }
}

export class AddMapFailAction implements Action {
  type = ActionTypes.ADD_MAP_FAIL;

  constructor(public payload: Map) { }
}

/**
 * Remove Format from Conversion Actions
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
 * Remove Map from Conversion Actions
 */
export class RemoveMapAction implements Action {
  type = ActionTypes.REMOVE_FORMAT;

  constructor(public payload: Map) { }
}

export class RemoveMapSuccessAction implements Action {
  type = ActionTypes.REMOVE_FORMAT_SUCCESS;

  constructor(public payload: Map) { }
}

export class RemoveMapFailAction implements Action {
  type = ActionTypes.REMOVE_FORMAT_FAIL;

  constructor(public payload: Map) { }
}

/**
 * Load Conversion Actions
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
  | AddMapAction
  | AddMapSuccessAction
  | AddMapFailAction
  | RemoveFormatAction
  | RemoveFormatSuccessAction
  | RemoveFormatFailAction
  | RemoveMapAction
  | RemoveMapSuccessAction
  | RemoveMapFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

