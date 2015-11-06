(function(){
    'use strict';

    angular.module('ng-simple-exception', ['simpleExceptionInterceptor']);

    angular.module('simpleException', [])
    .provider('simpleExceptionConfig', function () {
      this.postUrl = '';

      this.$get = [
        function() {
          return {
            postUrl: this.postUrl
          }
        }
      ];
    });
})();
