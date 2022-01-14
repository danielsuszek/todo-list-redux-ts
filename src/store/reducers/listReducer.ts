import * as actionTypes from '../constants/listActionContstants'
import { ListsAction } from './../type';
import { ListState } from '../type'

const initialState: ListState = {
  lists: {}
}

export const listReducer = (state = initialState, action: ListsAction): ListState => {
  switch(action.type) {
    default:
      return state
  }
}