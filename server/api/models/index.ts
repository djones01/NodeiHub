const cls = require("continuation-local-storage");
import * as fs from "fs";
import * as path from "path";
import {configs} from "../../config/configs";
import {logger} from "../../utils/logger";
import * as Sequelize from "sequelize";

// import interfaces


export interface SequelizeModels {
  User: Sequelize.Model<UserInstance, UserAttributes>;
}

class Database {
  private _basename: string;
  private _models: SequelizeModels;
  private _sequelize: Sequelize.Sequelize;

  constructor() {
    this._basename = path.basename(module.filename);
    let dbConfig = configs.getDatabaseConfig();

    if (dbConfig.logging) {
      dbConfig.logging = logger.info;
    }

    (Sequelize as any).cls = cls.createNamespace("sequelize-transaction");
    this._sequelize = new Sequelize(dbConfig.database, dbConfig.username,
      dbConfig.password, dbConfig);
    this._models = ({} as any);

    fs.readdirSync(__dirname).filter((file: string) => {
      return (file !== this._basename) && (file !== "interfaces");
    }).forEach((file: string) => {
      let model = this._sequelize.import(path.join(__dirname, file));
      this._models[(model as any).name] = model;
    });

    Object.keys(this._models).forEach((modelName: string) => {
      if (typeof this._models[modelName].associate === "function") {
        this._models[modelName].associate(this._models);
      }
    });
  }

  getModels() {
    return this._models;
  }

  getSequelize() {
    return this._sequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();