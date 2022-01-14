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

export interface ListState {
  lists: Lists
}

// Actions
interface AddListAction {
  type: typeof listActionConstants.ADD_LIST,
  payload: List  
}

export type ListsAction = AddListAction