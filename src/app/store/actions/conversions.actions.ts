import { Action } from '@ngrx/store';
import { Conversion } from '../models/format';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_CONVERSION:             type('[Conversions] Add Conversion'),
  ADD_CONVERSION_SUCCESS:     type('[Conversions] Add Conversion Success'),
  ADD_CONVERSION_FAIL:        type('[Conversions] Add Conversion Fail'),
  REMOVE_CONVERSION:          type('[Conversions] Remove Conversion'),
  REMOVE_CONVERSION_SUCCESS:  type('[Conversions] Remove Conversion Success'),
  REMOVE_CONVERSION_FAIL:     type('[Conversions] Remove Conversion Fail'),
  LOAD:                    type('[Conversions] Load'),
  LOAD_SUCCESS:            type('[Conversions] Load Success'),
  LOAD_FAIL:               type('[Conversions] Load Fail'),
};


/**
 * Add Conversion to Conversions Actions
 */
export class AddConversionAction implements Action {
  type = ActionTypes.ADD_CONVERSION;

  constructor(public payload: Conversion) { }
}

export class AddConversionSuccessAction implements Action {
  type = ActionTypes.ADD_CONVERSION_SUCCESS;

  constructor(public payload: Conversion) { }
}

export class AddConversionFailAction implements Action {
  type = ActionTypes.ADD_CONVERSION_FAIL;

  constructor(public payload: Conversion) { }
}


/**
 * Remove Conversion from Conversions Actions
 */
export class RemoveConversionAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION;

  constructor(public payload: Conversion) { }
}

export class RemoveConversionSuccessAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION_SUCCESS;

  constructor(public payload: Conversion) { }
}

export class RemoveConversionFailAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION_FAIL;

  constructor(public payload: Conversion) { }
}

/**
 * Load Conversions Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Conversion[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddConversionAction
  | AddConversionSuccessAction
  | AddConversionFailAction
  | RemoveConversionAction
  | RemoveConversionSuccessAction
  | RemoveConversionFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

