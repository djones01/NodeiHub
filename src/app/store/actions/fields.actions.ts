import { Action } from '@ngrx/store';
import { Field } from '../models/field';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_FIELD:             type('[Fields] Add Field'),
  ADD_FIELD_SUCCESS:     type('[Fields] Add Field Success'),
  ADD_FIELD_FAIL:        type('[Fields] Add Field Fail'),
  REMOVE_FIELD:          type('[Fields] Remove Field'),
  REMOVE_FIELD_SUCCESS:  type('[Fields] Remove Field Success'),
  REMOVE_FIELD_FAIL:     type('[Fields] Remove Field Fail'),
  LOAD:                  type('[Fields] Load'),
  LOAD_SUCCESS:          type('[Fields] Load Success'),
  LOAD_FAIL:             type('[Fields] Load Fail'),
};


/**
 * Add Field to Fields Actions
 */
export class AddFieldAction implements Action {
  type = ActionTypes.ADD_FIELD;

  constructor(public payload: Field) { }
}

export class AddFieldSuccessAction implements Action {
  type = ActionTypes.ADD_FIELD_SUCCESS;

  constructor(public payload: Field) { }
}

export class AddFieldFailAction implements Action {
  type = ActionTypes.ADD_FIELD_FAIL;

  constructor(public payload: Field) { }
}


/**
 * Remove Field from Fields Actions
 */
export class RemoveFieldAction implements Action {
  type = ActionTypes.REMOVE_FIELD;

  constructor(public payload: Field) { }
}

export class RemoveFieldSuccessAction implements Action {
  type = ActionTypes.REMOVE_FIELD_SUCCESS;

  constructor(public payload: Field) { }
}

export class RemoveFieldFailAction implements Action {
  type = ActionTypes.REMOVE_FIELD_FAIL;

  constructor(public payload: Field) { }
}

/**
 * Load Fields Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Field[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddFieldAction
  | AddFieldSuccessAction
  | AddFieldFailAction
  | RemoveFieldAction
  | RemoveFieldSuccessAction
  | RemoveFieldFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

