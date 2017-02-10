import * as Sequelize from "sequelize";

export interface UserProjectAttributes {
  role: string;
  active_on_project: boolean;
  effective_date: Date;
}

export interface UserProjectInstance extends Sequelize.Instance<UserProjectAttributes> {

}