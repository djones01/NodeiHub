const path = require('path');

export interface ServerConfig {
  root: string;
  port: number;
  secrets: {
    secret: string,
    length: number,
    digest: string
  },
  session: {
    name: string,
    resave: boolean,
    saveUninitialized: boolean,
    proxy: boolean
  },
  userRoles: string[];
}

export const serverConfig: ServerConfig = {
  root: path.normalize(`${__dirname}/../../..`), 
  port: 4300,
  secrets: {
    secret: 'RbBQqA6uF#msRF8s7h*?@=95HUm&DgMDd6zLFn4XzWQ6dtwXSJwBX#?gL2JWf!',
    length: 128,
    digest: 'sha256'
  },
  session: {
    name: "ihub",
    resave: false,
    saveUninitialized: false,
    proxy: false
  },
  userRoles: ['guest', 'user', 'admin']
};
