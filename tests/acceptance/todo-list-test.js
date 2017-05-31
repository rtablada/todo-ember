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

test('submitting a form creates a new todo', function(assert) {
  visit('/');

  fillIn('.test-new-title-input', 'Walk the doggo');
  click('.test-new-todo-submit');

  andThen(function() {
    assert.equal(currentURL(), '/',
      'It should not redirect');

     assert.equal(find('.test-todo-item').length, 1,
      'The new todo shows up in the list');
     assert.equal(server.db.todos.length, 1,
      'The new todo is saved to the server');
     assert.equal(server.db.todos[0].title, 'Walk the doggo',
      'The new todo is saved to the server with title');

    assert.ok(find('.test-todo-item:eq(0)').text().includes('Walk the doggo'));

    assert.equal(find('.test-new-title-input').val(), '');
  });
});
