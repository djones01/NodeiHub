'use strict';
const express = require('express');
import { configs } from '../config/configs';
import {User} from '../sqldb';

// Passport Configuration
require('./local/passport').setup(User, configs);

var router = express.Router();

router.use('/local', require('./local').default);

export default router;
