import * as Sequelize from "sequelize";

export interface FllAttributes {
  id?: number;
  line_length: number;
  line_index: number;
  file_id: number;
}

export interface FllInstance extends Sequelize.Instance<FllAttributes> {

}