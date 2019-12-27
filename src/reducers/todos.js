function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    todoId: action.todoId,
                    text: action.todo,
                    isActive: true,
                }
            ]
        case 'DELETE_TODO':
            return state.filter(todo => todo.todoId !== action.todoId);
        case 'TOGGLE_TODO':
            return state.map(todo => (
                todo.todoId === action.todoId ? { ...todo, isActive: !todo.isActive } : todo
            ))
        case 'EDIT_TODO_TEXT':
            return state.map(todo => (
                todo.todoId === action.todoId ? { ...todo, text: action.newText } : todo
            ))
        case 'CLEAR_COMPLETED':
            return state.filter(todo => todo.isActive);
        case 'TOGGLE_ALL':
            const isAllCompleted = (state.filter(todo => todo.isActive)).length;
            return state.map(todo => (
                todo.isActive !== isAllCompleted ? { ...todo, isActive: !isAllCompleted } : todo
            ))
        default:
            return state
    }
}

export default todos