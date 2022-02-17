import * as actionTypes from '../constants/listActionContstants'

import { ListsAction, ListState, Lists } from '../type'

const initialState: ListState = {
  lists: {},
  listIdToDelete: '',
  listById: null
}

// Helper functions
const getListsFromLS = (): Lists => {
  if(localStorage.getItem('task_list')) {
    return JSON.parse(localStorage.getItem('task_list') || '{}');
  }

  return {};
}

const saveListsToLS = (lists: Lists) => {
  localStorage.setItem('task_list', JSON.stringify(lists));
}

export const listReducer = (state = initialState, action: ListsAction): ListState => {
  const listsFromLS = getListsFromLS();
  switch(action.type) {
    case actionTypes.ADD_LIST:
      const clonedListsFromLS = {...listsFromLS};
      clonedListsFromLS[action.payload.id] = action.payload;
      saveListsToLS(clonedListsFromLS);

      return {
        ...state,
        lists: clonedListsFromLS
      }
    case actionTypes.GET_LISTS:
      return {
        ...state,
        lists: listsFromLS
      }
    case actionTypes.SET_LIST_ID_TO_DELETE:
      return {
        ...state,
        listIdToDelete: action.payload
      }
    case actionTypes.GET_LIST_BY_ID:
      const list = listsFromLS[action.payload]
      return {
        ...state,
        listById: list
      }
    case actionTypes.DELETE_LIST:
      const clonedListsFromLS2 = getListsFromLS()
      delete clonedListsFromLS2[action.payload]
      saveListsToLS(clonedListsFromLS2)
      return {
        ...state,
        lists: clonedListsFromLS2,
        listIdToDelete: '',
        listById: null
      }
    default:
      return state
  }
}


