import 'typeface-nunito-sans/index.css';
import 'prismjs/themes/prism.css';
import './assets/css/base.css';
export default (function (_ref) {
  var router = _ref.router;

  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    var nprogress = require('nprogress');

    nprogress.configure({
      showSpinner: false
    });

    require("nprogress/nprogress.css");

    var loaded = Object.create(null);
    router.beforeEach(function (to, from, next) {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start();
      }

      next();
    });
    router.afterEach(function (to) {
      loaded[to.path] = true; // Stop progress bar after entering page

      nprogress.done();
    });
  }
});