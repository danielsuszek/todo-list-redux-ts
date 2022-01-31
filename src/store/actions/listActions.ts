import * as listTypes from "../constants/listActionContstants"

import { List, ListsAction } from "../type"

export const addList = (list: List): ListsAction => {
  return {
    type: listTypes.ADD_LIST,
    payload: list
  }
}

export const getLists = (): ListsAction => {
  return {
    type: listTypes.GET_LISTS
  }
}