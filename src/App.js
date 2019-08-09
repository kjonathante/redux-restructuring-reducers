import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions/todosActions'

function App(props) {
  function handleClick(){
    props.addTodo("something")
  }

  return (
    <div>
      {props.todos.map(todo => (
        <p key={todo.id}>{todo.text}</p>
      ))}
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { todos: state.todos }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addTodo: text => dispatch(addTodo(text))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
