const TodoListForm = ({ onChange, onSubmit, currentValue }) => {
    return (
        <form onSubmit={onSubmit}>
            <h1>Todolist</h1>
            <label htmlFor="title">Name: </label>
            <input type="text" name="title" id="title" value={currentValue || ''} onChange={onChange}/>
            <input type="submit" value="Save" />
        </form>
    )
}

export default TodoListForm;