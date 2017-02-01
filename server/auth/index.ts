'use strict';
const express = require('express');
import { config } from '../config';
import {User} from '../sqldb';

// Passport Configuration
require('./local/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local').default);

export default router;
