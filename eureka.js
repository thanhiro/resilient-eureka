/**
 * Eureka middleware for resilient
 *
 * @param params
 * @return {middleware}
 */
module.exports = function eureka(params) {
  // Middleware-specific params
  params = params || {};

  function middleware(options, resilient) {
    return {
      in(err, res, next) {
        if (err) return next();

        const instances = res.data.application.instance;
        if (Array.isArray(instances)) {
          res.data = mapServers(instances);
        }
        next();
      },
      out(options, next) {
        next();
      }
    };
  }

  /**
   * Construct actual URLs from Eureka response objects
   * @param list
   */
  function mapServers(list) {
    return list.map(s => {
      return 'http://' + s.hostName + ':' + s.port['$'];
    });
  }

  middleware.type = 'discovery';

  return middleware;
}
