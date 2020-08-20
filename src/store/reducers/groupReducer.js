const INITIAL_STATE = {
  groups: []
}

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return { ...state, groups: [...state.groups, action.payload] }
    case 'REMOVE_GROUP': {
      const NEWGROUPLIST = state.groups.filter(
        (el, index) => index !== action.payload
      )
      return { ...state, groups: NEWGROUPLIST }
    }
    default:
      return state
  }
}

export default groupReducer
