import {Sequelize} from "sequelize";

export interface UserAttributes {
  name: string;
  description: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
  dataValues: UserAttributes;
}

export interface UserModel extends Sequelize.Model<UserInstance, UserAttributes> { }