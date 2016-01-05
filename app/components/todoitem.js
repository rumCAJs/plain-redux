export default function TodoItem(todo, target) {
    this.todo = todo;
    this.container = document.createElement("div");
    target.appendChild(this.container);
    this.render();
}

TodoItem.prototype.shouldComponentUpdate = function(newTodo) {
    return this.todo != newTodo;
}

TodoItem.prototype.setTodo = function(newTodo) {
    this.todo = newTodo;
}

TodoItem.prototype.render = function() {
    this.container.className = "todo-item" + (this.todo.isDone ? " active" : "");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.index = this.todo.index;
    checkbox.dataset.name = "todo-item-isactive";
    if(this.todo.isDone) {
        checkbox.checked = true;
    }

    let text = document.createTextNode(this.todo.title);

    let span = document.createElement("span");
    span.dataset.name = "todo-item-delete";
    span.dataset.index = this.todo.index;
    span.className = "delete-todo";
    span.textContent = "x";

    this.container.innerHTML = "";
    this.container.appendChild(checkbox);
    this.container.appendChild(text);
    this.container.appendChild(span);
}
