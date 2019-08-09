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
