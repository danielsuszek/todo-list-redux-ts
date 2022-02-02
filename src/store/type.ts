import * as listActionConstants from "./constants/listActionContstants"


export type ID = string;

export interface Task {
  id: ID;
  name: string;
  completed: boolean;
}

export interface List {
  id: ID;
  name: string;
  tasks: Task[];
}

export interface Lists {
  [id: string]: List
}

// actions
interface AddListAction {
  type: typeof listActionConstants.ADD_LIST,
  payload: List  
}

interface GetListAction {
  type: typeof listActionConstants.GET_LISTS
}

interface SetListIdToDeleteAction {
  type: typeof listActionConstants.SET_LIST_ID_TO_DELETE
  payload: ID
}

export type ListsAction = AddListAction | GetListAction | SetListIdToDeleteAction

// states
export interface ListState {
  lists: Lists,
  listIdToDelete: ID
}


