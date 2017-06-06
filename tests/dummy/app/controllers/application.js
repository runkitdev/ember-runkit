import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onLoad() {
      console.log('loaded')
    },
    onEvaluate() {
      console.log('evaluated')
    }
  }
})
