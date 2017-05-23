import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('runkit-embed', 'Integration | Component | runkit embed', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{runkit-embed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#runkit-embed}}
      template block text
    {{/runkit-embed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
