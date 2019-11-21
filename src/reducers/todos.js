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
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.todoId !== action.todoId)
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if(todo.todoId === action.todoId) {
                    return {...todo, isActive: !todo.isActive}
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

export default todos;