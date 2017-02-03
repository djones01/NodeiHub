import * as cluster from "cluster";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {configs} from "../config/configs";
const Winston = require("winston");
import {Request, Response} from "express";

let config = configs.getLoggingConfig();
config.file.filename = `${path.join(config.directory, "../server/logs")}/${config.file.filename}`;

if (cluster.isMaster) {
  mkdirp.sync(path.join(config.directory, "../server/logs"));
}

export const logger = new Winston.Logger({
  transports: [
    new Winston.transports.File(config.file),
    new Winston.transports.Console(config.console)
  ],
  exitOnError: false
});

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};