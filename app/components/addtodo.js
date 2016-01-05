import { ADD_TODO } from '../state/actions'

export default function AddTodo(store, target) {
    this.store = store;
    this.target = target;

    this.refs = {};

    this.container = document.createElement("div");
    this.target.appendChild(this.container);
    this.addHandlers();
    this.render();
}

AddTodo.prototype.addHandlers = function() {
    this.container.addEventListener("submit", e => {
        e.preventDefault();
        this.store.dispatch({
            type: ADD_TODO,
            title: this.refs.title.value,
            index: this.store.getState().todos.length
        });
        this.refs.title.value = "";
    });
}

AddTodo.prototype.addRefs = function(name, obj) {
    this.refs[name] = obj;
}

AddTodo.prototype.render = function() {
    let form = document.createElement("form");
    form.action = "";
    form.method = "post";

    let input = document.createElement("input");
    input.name = "title";
    this.addRefs("title", input);

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add Todo";

    form.appendChild(input);
    form.appendChild(button);

    this.container.innerHTML = "";
    this.container.appendChild(form);
}
