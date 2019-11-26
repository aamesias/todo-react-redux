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
            return state.filter((todo) => todo.todoId !== action.todoId);
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if(todo.todoId === action.todoId) {
                    return {...todo, isActive: !todo.isActive};
                } else {
                    return todo;
                }
            })
        case 'EDIT_TODO_TEXT':
            return state.map((todo) => {
                if(todo.todoId === action.todoId) {
                    return { ...todo, text: action.newText,};
                } else {
                    return todo;
                }
            })
        case 'CLEAR_COMPLETED':
            return state.filter((todo) => todo.isActive === true);
        case 'TOGGLE_ALL': 
            const isAllCompleted = (state.filter((todo) => todo.isActive === true)).length; 
            return state.map((todo) => {
                return {...todo, isActive: !isAllCompleted}
            });
        default:
            return state;
    }
}

export default todos;