import * as listActionConstants from "./constants/listActionContstants"


type ID = string;

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

export type ListsAction = AddListAction | GetListAction

// states
export interface ListState {
  lists: Lists 
}


