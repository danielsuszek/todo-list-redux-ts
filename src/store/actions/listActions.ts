import * as listTypes from "../constants/listActionContstants"

import { ID, List, ListsAction, Task } from "../type"

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

export const setListToEdit = (id: ID): ListsAction => {
  return {
    type: listTypes.SET_LIST_TO_EDIT,
    payload: id
  }
}

export const updateList = (id: ID, name: string): ListsAction => {
  return {
    type: listTypes.UPDATE_LIST,
    payload: {
      id,
      name
    }
  }
}

export const setSelectedList = (id: ID): ListsAction => {
  return {
    type: listTypes.SELECTED_LIST,
    payload: id
  }
}

export const addTask = (list: List, task: Task): ListsAction => {
  return {
    type: listTypes.ADD_TASK,
    payload: {
      list,
      task
    }
  }
}

export const setTaskToDelete = (list: List, task: Task): ListsAction => {
  return {
    type: listTypes.SET_TASK_TO_DELETE,
    payload: {
      list,
      task
    }
  }
}

export const setTaskToEdit = (list: List, task: Task): ListsAction => {
  return {
    type: listTypes.SET_TASK_TO_EDIT,
    payload: {
      list,
      task
    }
  }
}

export const editTask = (list: List, taskId: ID, taskContent: string, taskCompleted: boolean): ListsAction => {
  return {
    type: listTypes.EDIT_TASK,
    payload: {
      list,
      taskId,
      taskContent,
      taskCompleted
    }
  }
}