import Ember from 'ember';

export default Ember.Controller.extend({
  inputVals: null,

  setupFormValues() {
    this.set('inputVals', {});
  },

  actions: {
    saveTodo(changeset, ev) {
      ev.preventDefault();

      changeset.validate();
      changeset.save();

      const todo = this.store.createRecord('todo', this.get('inputVals'));
      todo.save().then(() => {
        this.setupFormValues();
      });
    }
  }
});
