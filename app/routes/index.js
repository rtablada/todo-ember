import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo');
  },

  setupController(controller) {
    this._super(...arguments);

    controller.setupFormValues();
  }
});
