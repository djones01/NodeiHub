import * as Sequelize from "sequelize";

export interface ConversionAttributes {
  id?: number;
  name: string;
  description?: string;
  maintain_output_order: boolean;
  split_output: boolean;
  active: boolean;
  hidden: boolean;
  logging_mode?: string;
  log_filename?: string;
}

export interface ConversionInstance extends Sequelize.Instance<ConversionAttributes> {

}