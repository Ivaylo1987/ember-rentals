import * as emberq from 'ember-qunit';
// { moduleFor, test }

emberq.moduleFor('route:index', 'Unit | Route | index');

emberq.test('should transition to rentals route', function (assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'rentals', 'replace with route name rentals');
    }
  });
  route.beforeModel();
});
