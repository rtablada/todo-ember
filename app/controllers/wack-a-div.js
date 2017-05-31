import Ember from 'ember';

export default Ember.Controller.extend({
  board: null,

  reset() {
    const board = new Array(16);
    board.fill(0);

    this.set('board', board);
  }
});
