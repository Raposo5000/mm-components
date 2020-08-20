export const addGroup = newGroup => {
  return { type: 'ADD_GROUP', payload: newGroup }
}

export const removeGroup = removebleGroup => {
  return { type: 'REMOVE_GROUP', payload: removebleGroup }
}
