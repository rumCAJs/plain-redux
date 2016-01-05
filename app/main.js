import store from './state/store';
import AddTodo from './components/addtodo';
import TodoList from './components/todolist';

let addTodoComponent = new AddTodo(store, document.getElementById("container"));
let todoListComponent = new TodoList(store, document.getElementById("container"));
