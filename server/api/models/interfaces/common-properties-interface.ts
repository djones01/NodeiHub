import * as Sequelize from "sequelize";

export interface CommonPropertiesAttributes {
  id?: number;
  content_type: string;
  encoding: string;
}

export interface CommonPropertiesInstance extends Sequelize.Instance<CommonPropertiesAttributes> {

}