import { Action } from '@ngrx/store';
import { Project } from '../models/project';
import { Conversion } from '../models/conversion';
import { IntegrationSchedule } from '../models/integration-schedule';
import { type } from '../type-util';


export const ActionTypes = {
  ADD_CONVERSION:                               type('[Project] Add Conversion'),
  ADD_CONVERSION_SUCCESS:                       type('[Project] Add Conversion Success'),
  ADD_CONVERSION_FAIL:                          type('[Project] Add Conversion Fail'),
  ADD_INTEGRATION_SCHEDULE:                     type('[Project] Add Integration Schedule'),
  ADD_INTEGRATION_SCHEDULE_SUCCESS:             type('[Project] Add Integration Schedule Success'),
  ADD_INTEGRATION_SCHEDULE_FAIL:                type('[Project] Add Integration Schedule Fail'),
  REMOVE_CONVERSION:                            type('[Project] Remove Conversion'),
  REMOVE_CONVERSION_SUCCESS:                    type('[Project] Remove Conversion Success'),
  REMOVE_CONVERSION_FAIL:                       type('[Project] Remove Conversion Fail'),
  REMOVE_INTEGRATION_SCHEDULE:                  type('[Project] Remove Integration Schedule'),
  REMOVE_INTEGRATION_SCHEDULE_SUCCESS:          type('[Project] Remove Integration Schedule Success'),
  REMOVE_INTEGRATION_SCHEDULE_FAIL:             type('[Project] Remove Integration Schedule Fail'),
  LOAD:                                         type('[Project] Load'),
  LOAD_SUCCESS:                                 type('[Project] Load Success'),
  LOAD_FAIL:                                    type('[Project] Load Fail'),
};


/**
 * Add Conversion to Project Actions
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
 * Add Integration Schedule to Project Actions
 */
export class AddIntegrationScheduleAction implements Action {
  type = ActionTypes.ADD_INTEGRATION_SCHEDULE;

  constructor(public payload: IntegrationSchedule) { }
}

export class AddIntegrationScheduleSuccessAction implements Action {
  type = ActionTypes.ADD_INTEGRATION_SCHEDULE_SUCCESS;

  constructor(public payload: IntegrationSchedule) { }
}

export class AddIntegrationScheduleFailAction implements Action {
  type = ActionTypes.ADD_INTEGRATION_SCHEDULE_FAIL;

  constructor(public payload: IntegrationSchedule) { }
}

/**
 * Remove Conversion from Project Actions
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
 * Remove Integration Schedule from Project Actions
 */
export class RemoveIntegrationScheduleAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION;

  constructor(public payload: IntegrationSchedule) { }
}

export class RemoveIntegrationScheduleSuccessAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION_SUCCESS;

  constructor(public payload: IntegrationSchedule) { }
}

export class RemoveIntegrationScheduleFailAction implements Action {
  type = ActionTypes.REMOVE_CONVERSION_FAIL;

  constructor(public payload: IntegrationSchedule) { }
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
  | AddIntegrationScheduleAction
  | AddIntegrationScheduleSuccessAction
  | AddIntegrationScheduleFailAction
  | RemoveConversionAction
  | RemoveConversionSuccessAction
  | RemoveConversionFailAction
  | RemoveIntegrationScheduleAction
  | RemoveIntegrationScheduleSuccessAction
  | RemoveIntegrationScheduleFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;

