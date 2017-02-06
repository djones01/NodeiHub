import { Action } from '@ngrx/store';
import { Project } from '../models/project';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_PROJECT:             type('[Projects] Add Project'),
  ADD_PROJECT_SUCCESS:     type('[Projects] Add Project Success'),
  ADD_PROJECT_FAIL:        type('[Projects] Add Project Fail'),
  REMOVE_PROJECT:          type('[Projects] Remove Project'),
  REMOVE_PROJECT_SUCCESS:  type('[Projects] Remove Project Success'),
  REMOVE_PROJECT_FAIL:     type('[Projects] Remove Project Fail'),
  LOAD:                    type('[Projects] Load'),
  LOAD_SUCCESS:            type('[Projects] Load Success'),
  LOAD_FAIL:               type('[Projects] Load Fail'),
};


/**
 * Add Project to Projects Actions
 */
export class AddProjectAction implements Action {
  type = ActionTypes.ADD_PROJECT;

  constructor(public payload: Project) { }
}

export class AddProjectSuccessAction implements Action {
  type = ActionTypes.ADD_PROJECT_SUCCESS;

  constructor(public payload: Project) { }
}

export class AddProjectFailAction implements Action {
  type = ActionTypes.ADD_PROJECT_FAIL;

  constructor(public payload: Project) { }
}


/**
 * Remove Project from Projects Actions
 */
export class RemoveProjectAction implements Action {
  type = ActionTypes.REMOVE_PROJECT;

  constructor(public payload: Project) { }
}

export class RemoveProjectSuccessAction implements Action {
  type = ActionTypes.REMOVE_PROJECT_SUCCESS;

  constructor(public payload: Project) { }
}

export class RemoveProjectFailAction implements Action {
  type = ActionTypes.REMOVE_PROJECT_FAIL;

  constructor(public payload: Project) { }
}

/**
 * Load Projects Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Project[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddProjectAction
  | AddProjectSuccessAction
  | AddProjectFailAction
  | RemoveProjectAction
  | RemoveProjectSuccessAction
  | RemoveProjectFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

