import { CHANGE_TODO_STATE, REMOVE_TODO } from '../state/actions'
import TodoItem from './todoitem'

export default function TodoList(store, target) {
    this.store = store;
    this.target = target;

    this.refs = {};
    this.todoItems = [];

    this.container = document.createElement("div");
    this.target.appendChild(this.container);
    this.todos = this.store.getState().todos;
    this.addHandlers();
    this.render();
}

TodoList.prototype.addHandlers = function() {
    this.store.subscribe(() => {
        if( this.shouldComponentUpdate(this.store.getState().todos) ) {
            this.todos = this.store.getState().todos;
            this.render();
        }
    });
    this.container.addEventListener("click", (e) => {
        if( e.target.dataset.name === "todo-item-isactive" ) {
            let index = parseInt(e.target.dataset.index, 10);
            this.store.dispatch({
                type: CHANGE_TODO_STATE,
                index
            });
        }
        else if( e.target.dataset.name === "todo-item-delete" ) {
            let index = parseInt(e.target.dataset.index, 10);
            this.store.dispatch({
                type: REMOVE_TODO,
                index
            });
        }
    });
}

TodoList.prototype.shouldComponentUpdate = function(newTodos) {
    return this.todos != newTodos;
}

TodoList.prototype.render = function() {
    let ul = document.createElement("div");
    ul.className = "todo-list";

    this.todos.forEach((todo, index) => {
        this.todoItems.push(new TodoItem(todo, ul));
    });

    this.container.innerHTML = "";
    this.container.appendChild(ul);
}
