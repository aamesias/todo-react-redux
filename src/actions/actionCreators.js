// let nextTodoId = 0;
const uuid = require("uuid/v4")
export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todoId: uuid(), //nextTodoId++,
        todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type: 'DELETE_TODO',
        todoId,
    }
}

export function toggleTodo(todoId) {
    return {
        type: 'TOGGLE_TODO',
        todoId,
    }
}

export function editTodoText(todoId, newText) {
    return {
        type: 'EDIT_TODO_TEXT',
        todoId,
        newText,
    }
}

export function setFilter(filter) {
    return {
        type: 'SET_FILTER',
        filter,
    }
}

export function clearCompleted() {
    return {
        type: 'CLEAR_COMPLETED',
    }
}

export function toggleAll() {
    return {
        type: 'TOGGLE_ALL',
    }
}