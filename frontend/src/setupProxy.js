// the purpose of this middleware is that so you can query the backend without having to the type the port number
// see https://create-react-app.dev/docs/proxying-api-requests-in-development/
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.REACT_APP_BACKEND_URL,
        changeOrigin: true,
      })
  );
};