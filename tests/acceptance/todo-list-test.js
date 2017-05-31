import { test } from 'qunit';
import moduleForAcceptance from 'todo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo list');

test('visiting home page shows the list of all todos', function(assert) {
  server.createList('todo', 10);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(find('.test-todo-item').length, server.db.todos.length,
      'There is a todo item element for each item in the API');

    assert.ok(find('.test-todo-item:eq(0)').text().includes(server.db.todos[0].title));
  });
});
