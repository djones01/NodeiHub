import * as Sequelize from "sequelize";

export interface FileAttributes {
  id?: number;
  filename: string;
  file_extension: string;
  attribute_id: number;
  source_attribute_id?: number;
  target_attribute_id?: number;
}

export interface FileInstance extends Sequelize.Instance<FileAttributes> {

}