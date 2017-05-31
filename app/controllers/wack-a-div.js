import Ember from 'ember';
import {task, timeout} from 'ember-concurrency';

export default Ember.Controller.extend({
  board: null,
  score: 0,

  reset() {
    const board = new Array(16);
    board.fill(false);

    this.set('board', board);
    this.set('score', 0);
  },

  game: task(function* () {
    while (true) {
      yield timeout(1000);

      this.changeBoard();
    }
  }),

  changeBoard() {
    const space = Math.floor(Math.random() * 16);

    this.set('board', this.board.map((_, index) => space === index));
  },

  actions: {
    startGame() {
      this.get('game').perform();
    },

    score(isActive) {
      if (isActive) {
        this.set('score', this.score + 1);

        this.changeBoard();
      }
    }
  }
});
