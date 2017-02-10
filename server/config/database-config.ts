export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  uri: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
  timestamps: boolean;
}

export const databaseConfig: DatabaseConfig = {
  username: "",
  password: "",
  database: "ihubdb",
  uri: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: true,
  force: true,
  timezone: "+00:00",
  timestamps: false
};