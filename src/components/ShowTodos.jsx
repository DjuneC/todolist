const ShowTodos = ({ todos, onDeleteTodo }) => {

    return (
        <div className="Show">
            <ul>
                {todos &&
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.title}
                        <button onClick={() => onDeleteTodo(todo.id)}>X</button>

                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShowTodos