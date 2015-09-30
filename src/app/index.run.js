(function() {
  'use strict';

  angular
    .module('dreamCrm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
