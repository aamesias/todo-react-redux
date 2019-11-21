let nextTodoId = 0;
export function addTodo(todo) {
    return {
        type: 'ADD_TODO', 
        todoId: nextTodoId++,
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