import * as Sequelize from "sequelize";

export interface ConditionAttributes {
  id?: number;
  chain_operation: string;
  left_value?: string;
  right_value?: string;
  left_paren?: string;
  right_paren?: string;
  operator: string;
  seq_num: number;
  transformation_id: number;
  left_field_id?: number;
  right_field_id?: number;
}

export interface ConditionInstance extends Sequelize.Instance<ConditionAttributes> {

}