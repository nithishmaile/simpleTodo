// Write your code her

import './index.css'

const TodoItem = props => {
  const {todoListDetails, onDelete} = props
  const {id, title} = todoListDetails

  const onDeleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="list-items">
      <h1 className="list-heading">{title}</h1>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
