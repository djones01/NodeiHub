import { Action } from '@ngrx/store';
import { Project } from '../models/project';
import { Integration } from '../models/integration';
import { User } from '../models/user';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_INTEGRATION:             type('[Project] Add Integration'),
  ADD_INTEGRATION_SUCCESS:     type('[Project] Add Integration Success'),
  ADD_INTEGRATION_FAIL:        type('[Project] Add Integration Fail'),
  ADD_USER:                    type('[Project] Add User'),
  ADD_USER_SUCCESS:            type('[Project] Add User Success'),
  ADD_USER_FAIL:               type('[Project] Add User Fail'),
  REMOVE_INTEGRATION:          type('[Project] Remove Integration'),
  REMOVE_INTEGRATION_SUCCESS:  type('[Project] Remove Integration Success'),
  REMOVE_INTEGRATION_FAIL:     type('[Project] Remove Integration Fail'),
  REMOVE_USER:                 type('[Project] Remove User'),
  REMOVE_USER_SUCCESS:         type('[Project] Remove User Success'),
  REMOVE_USER_FAIL:            type('[Project] Remove User Fail'),
  LOAD:                        type('[Project] Load'),
  LOAD_SUCCESS:                type('[Project] Load Success'),
  LOAD_FAIL:                   type('[Project] Load Fail'),
};


/**
 * Add Integration to Project Actions
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
 * Add User to Project Actions
 */
export class AddUserAction implements Action {
  type = ActionTypes.ADD_USER;

  constructor(public payload: User) { }
}

export class AddUserSuccessAction implements Action {
  type = ActionTypes.ADD_USER_SUCCESS;

  constructor(public payload: User) { }
}

export class AddUserFailAction implements Action {
  type = ActionTypes.ADD_USER_FAIL;

  constructor(public payload: User) { }
}

/**
 * Remove Integration from Project Actions
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
 * Remove User from Project Actions
 */
export class RemoveUserAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION;

  constructor(public payload: User) { }
}

export class RemoveUserSuccessAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION_SUCCESS;

  constructor(public payload: User) { }
}

export class RemoveUserFailAction implements Action {
  type = ActionTypes.REMOVE_INTEGRATION_FAIL;

  constructor(public payload: User) { }
}

/**
 * Load Project Actions
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
  | AddUserAction
  | AddUserSuccessAction
  | AddUserFailAction
  | RemoveIntegrationAction
  | RemoveIntegrationSuccessAction
  | RemoveIntegrationFailAction
  | RemoveUserAction
  | RemoveUserSuccessAction
  | RemoveUserFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

