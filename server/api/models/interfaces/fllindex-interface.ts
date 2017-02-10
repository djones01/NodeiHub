import * as Sequelize from "sequelize";

export interface FllIndexAttributes {
  id?: number;
  index: number;
  fll_id: number;
}

export interface FllIndexInstance extends Sequelize.Instance<FllIndexAttributes> {

}