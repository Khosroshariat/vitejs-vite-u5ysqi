import './Todo.css'

function Todo({title}) {
  return (
    <div className="tood">
      <h2>{title}</h2>
      <button>Delete</button>
    </div>
    )
}

export default Todo