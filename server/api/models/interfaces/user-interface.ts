import * as Sequelize from "sequelize";
import { UserProjectAttributes } from './user-project-interface';

export interface UserAttributes {
  name: string;
  description: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
    // User Project mixins
    getUserProjectes: Sequelize.HasManyGetAssociationsMixin<UserProjectAttributes>;
    setUserProjectes: Sequelize.HasManySetAssociationsMixin<UserProjectAttributes, string>;
    addUserProjectes: Sequelize.HasManyAddAssociationsMixin<UserProjectAttributes, string>;
    addUserProject: Sequelize.HasManyAddAssociationMixin<UserProjectAttributes, string>;
    createUserProject: Sequelize.HasManyCreateAssociationMixin<UserProjectAttributes>;
    removeUserProject: Sequelize.HasManyRemoveAssociationMixin<UserProjectAttributes, string>;
    removeUserProjectes: Sequelize.HasManyRemoveAssociationsMixin<UserProjectAttributes, string>;
    hasUserProject: Sequelize.HasManyHasAssociationMixin<UserProjectAttributes, string>;
    hasUserProjectes: Sequelize.HasManyHasAssociationsMixin<UserProjectAttributes, string>;
    countUserProjectes: Sequelize.HasManyCountAssociationsMixin;
}
