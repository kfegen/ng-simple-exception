(function(){
    'use strict';
    angular.module('simpleExceptionInterceptor', ['simpleException'])
    .config([
      '$httpProvider', '$provide', function ($httpProvider, $provide) {

        var interceptor = ['$injector', 'simpleExceptionConfig', function ($injector, simpleExceptionConfig) {
            return {
              responseError: function (rejection) {
                if (rejection.config.url.indexOf(simpleExceptionConfig.postUrl) < 0) {
                  var $http = $injector.get("$http");
                  $http({
                    method: "POST",
                    url: simpleExceptionConfig.postUrl,
                    data: `"${window.location.href} - HttpError - Url: ${rejection.config.url} data: ${JSON.stringify(rejection).replace(/\"/g, "'")} "`
                  });
                }

                return rejection;
              }
            };
          }
        ];
        $httpProvider.interceptors.push(interceptor);

        $provide.decorator("$exceptionHandler", ['$delegate', '$injector', 'simpleExceptionConfig', function ($delegate, $injector, simpleExceptionConfig) {
          return function (exception, cause) {
            $delegate(exception, cause);
            var $http = $injector.get("$http");
            $http({
              method: "POST",
              url: simpleExceptionConfig.postUrl,
              data: `"${window.location.href} - Error: ${exception} Cause: ${cause}"`
            });
          };
        }]);
      }
    ]);
})();
