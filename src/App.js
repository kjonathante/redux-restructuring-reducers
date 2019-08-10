import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions/todosActions'

function App(props) {
  function handleClick() {
    props.addTodo('something')
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

// option #1, as a function
// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching plain actions
//     addTodo: text => dispatch(addTodo(text))
//   }
// }

// option #2, as an object
const mapDispatchToProps = { addTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
