import {
  createReducer,
  updateItemInArray,
  updateObject
} from './reducerUtilities'

// Case reducer
function addTodo(todosState, action) {
  const newTodos = todosState.concat({
    id: action.id,
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

const initial = {
  id: 1,
  text: 'test'
}

const todosReducers = createReducer([initial], {
  ADD_TODO: addTodo,
  EDIT_TODO: editTodo
})

export { todosReducers }
