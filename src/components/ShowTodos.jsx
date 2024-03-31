const ShowTodos = ({ todos }) => {
  return (
    <div>
        <ul>
            {todos &&
                todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ShowTodos