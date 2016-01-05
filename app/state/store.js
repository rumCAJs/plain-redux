import { createStore } from 'redux';
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO_STATE } from './actions';

const initialState = {
  todos: []
}

function todoItems(state = initialState, action) {
    console.log("DISPATCHING", action);
    switch (action.type) {
    case ADD_TODO:
        let newTodo = {
            title: action.title,
            id: action.id,
            isActive: true
        };
        return Object.assign({}, state, {todos: [...state.todos, newTodo]});
    case REMOVE_TODO:
        return Object.assign({}, state, {todos: state.todos.filter((todo, index) => index != action.index)});
    case CHANGE_TODO_STATE:
        return Object.assign({}, state, {todos: state.todos.map((todo, index) => {
                if( index === action.index ) {
                    return Object.assign({}, todo, {isActive: !todo.isActive});
                }
                return todo;
            })
        });
    default:
        return state
  }
}

let store = createStore(todoItems);

export default store;
