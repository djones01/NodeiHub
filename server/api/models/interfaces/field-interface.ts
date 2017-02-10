import * as Sequelize from "sequelize";

export interface FieldAttributes {
  id?: number;
  name: string;
  description?: string;
  length: number;
  datatype: string;
  decimals?: number;
  default_value?: string;
}

export interface FieldInstance extends Sequelize.Instance<FieldAttributes> {

}