(function(){
    'use strict';
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
