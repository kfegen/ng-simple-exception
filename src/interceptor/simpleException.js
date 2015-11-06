(function(){
    'use strict';
    angular.module('simpleException', [])
    .provider('simpleExceptionConfig', function () {
      this.postUrl = 'WebAPI/HLP/api/SiteError';

      this.$get = [
        function() {
          return {
            postUrl: this.postUrl
          }
        }
      ];
    });
})();
