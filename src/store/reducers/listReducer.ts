import * as actionTypes from '../constants/listActionContstants'

import { ListsAction, ListState, Lists } from '../type'

const initialState: ListState = {
  lists: {},
  listIdToDelete: ''
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
    default:
      return state
  }
}


