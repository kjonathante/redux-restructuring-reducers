# Redux

## Naming convention

## Folder Structure
```
  store
    actions
      todosActions
    reducers
      todosReducers
```

## Shape
```javascript
{
  [
    {
      id: 0
      text: '...'
      statue: boolean
    }
  ]
}
```

## Reducer
```javascript
// index.js
import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'

export default combineReducers({
  todos: todosReducer
})
```

``` javascript
// todosReducer.js
import {
  createReducer,
  updateItemInArray,
  updateObject
} from './reducerUtilities'

// Case reducer
function addTodo(todosState, action) {
  const newTodos = todosState.concat({
    id: todosState.length,
    text: action.text,
    completed: false
  })

  return newTodos
}

// Case reducer
function editTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id, todo => {
    return updateObject(todo, { text: action.text })
  })

  return newTodos
}

const todosReducers = createReducer([], {
  ADD_TODO: addTodo,
  EDIT_TODO: editTodo
})

export { todosReducers }
```

## Actions
```javascript
// todoAction.js
export const ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
  return { type: ADD_TODO, text }
}
```

## React index.js
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

## React component
```javascript
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
```