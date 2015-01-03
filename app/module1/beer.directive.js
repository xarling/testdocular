(function() {


  /**
   * @ngdoc directive
   * @name beerDirective
   * @description
   * sample beerDirective description
   *
   * <hr>
   *
   * <b>Kan ik hier HTML gebruiken?</b>
   *
   * @param {string} name De naam van het biertje
   *
   * @example
    <example module="beerExample">
      <file name="index.html">
      <beer name="Kanon"></beer>
    </example>
   *
   *
   * @restrict E
   *
   *
   */
  var beerDirective = function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      link: function postLink(scope, element, attrs) {
      }
  };

  };

  angular.module('beer').directive('beer', beerDirective);

})();
