import * as Sequelize from "sequelize";

export interface FormatAttributes {
  id?: number;
  name: string;
  description?: string;
  active?: boolean;
  hidden?: boolean;
}

export interface FormatInstance extends Sequelize.Instance<FormatAttributes> {

}