/**
 * Error responses
 */

'use strict';

export default function errors(req, res?) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, {}, function(err, html) {
    if(err) {
      return res.status(result.status).json(result);
    }

    res.send(html);
  });
};
