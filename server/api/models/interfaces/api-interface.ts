import * as Sequelize from "sequelize";

export interface APIAttributes {
  id?: number;
  resource_url: string;
  type: string;
  operation: string;
  ssl: boolean;
  host: string;
  port: number;
  attribute_id: number;
}

export interface APIInstance extends Sequelize.Instance<APIAttributes> {

}