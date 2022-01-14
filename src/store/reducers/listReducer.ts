import { ListState } from '../type'

const initialState: ListState = {
  lists: {}
}

export default (state = initialState, action: any): ListState => {
  switch(action.type) {
    default:
      return state
  }
}