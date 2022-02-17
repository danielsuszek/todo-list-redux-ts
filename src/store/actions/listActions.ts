import * as listTypes from "../constants/listActionContstants"

import { ID, List, ListsAction } from "../type"

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

export const setListIdToDelete = (id: ID): ListsAction => {
  return {
    type: listTypes.SET_LIST_ID_TO_DELETE,
    payload: id
  }
}

export const getListById = (id: ID): ListsAction => {
  return {
    type: listTypes.GET_LIST_BY_ID,
    payload: id
  }
}

export const deleteList = (id: ID): ListsAction => {
  return {
    type: listTypes.DELETE_LIST,
    payload: id
  }
}