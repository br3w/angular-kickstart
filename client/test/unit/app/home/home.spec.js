(function() {
  'use strict';

  describe('home', function() {
    var scope;
    beforeEach(module('app'));
    beforeEach(inject(function($rootScope) {
      scope = $rootScope;
    }));

    it('should have the right version', function() {
      expect(scope.config.version).toBe('1.0.0');
    });
  });
})();
