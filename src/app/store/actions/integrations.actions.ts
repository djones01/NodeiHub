import { Action } from '@ngrx/store';
import { Integration } from '../models/integration';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_INTEGRATION:             type('[Integrations] Add Integration'),
  ADD_INTEGRATION_SUCCESS:     type('[Integrations] Add Integration Success'),
  ADD_INTEGRATION_FAIL:        type('[Integrations] Add Integration Fail'),
  REMOVE_INTEGRATION:          type('[Integrations] Remove Integration'),
  REMOVE_INTEGRATION_SUCCESS:  type('[Integrations] Remove Integration Success'),
  REMOVE_INTEGRATION_FAIL:     type('[Integrations] Remove Integration Fail'),
  LOAD:                        type('[Integrations] Load'),
  LOAD_SUCCESS:                type('[Integrations] Load Success'),
  LOAD_FAIL:                   type('[Integrations] Load Fail'),
};


/**
 * Add Integration to Integrations Actions
 */
export class AddIntegrationAction implements Action {
  type = ActionTypes.ADD_INTEGRATION;

  constructor(public payload: Integration) { }
}

export class AddIntegrationSuccessAction implements Action {
  type = ActionTypes.ADD_INTEGRATION_SUCCESS;

  constructor(public payload: Integration) { }
}

export class AddIntegrationFailAction implements Action {
  type = ActionTypes.ADD_INTEGRATION_FAIL;

  constructor(public payload: Integration) { }
}


/**
 * Remove Integration from Integrations Actions
 */
export class RemoveIntegrationAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION;

  constructor(public payload: Integration) { }
}

export class RemoveIntegrationSuccessAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION_SUCCESS;

  constructor(public payload: Integration) { }
}

export class RemoveIntegrationFailAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION_FAIL;

  constructor(public payload: Integration) { }
}

/**
 * Load Integrations Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Integration[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddIntegrationAction
  | AddIntegrationSuccessAction
  | AddIntegrationFailAction
  | RemoveIntegrationAction
  | RemoveIntegrationSuccessAction
  | RemoveIntegrationFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

