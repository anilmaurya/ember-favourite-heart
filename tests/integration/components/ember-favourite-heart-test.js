import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-favourite-heart', 'Integration | Component | ember favourite heart', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-favourite-heart likeCount=20}}`);

  assert.equal(this.$().text().trim(), '20');

  // Template block usage:
  this.render(hbs`
    {{#ember-favourite-heart}}
      template block text
    {{/ember-favourite-heart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
