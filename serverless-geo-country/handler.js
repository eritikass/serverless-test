'use strict';

module.exports.country = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      viewer_country_code: event.headers['CloudFront-Viewer-Country'] || '',
      viewer_ip: event.requestContext && event.requestContext.identity && event.requestContext.identity['sourceIp'] || '',
    }),
  };
};
