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
  isSelected: boolean;
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

interface GetListsAction {
  type: typeof listActionConstants.GET_LISTS
}

interface SetListIdToDeleteAction {
  type: typeof listActionConstants.SET_LIST_ID_TO_DELETE
  payload: ID
}

interface GetListByIdAction {
  type: typeof listActionConstants.GET_LIST_BY_ID
  payload: ID
}

interface DeleteListAction {
  type: typeof listActionConstants.DELETE_LIST
  payload: ID
}

interface SetListToEditAction {
  type: typeof listActionConstants.SET_LIST_TO_EDIT,
  payload: ID
}

interface UpdateListAction {
  type: typeof listActionConstants.UPDATE_LIST,
  payload: {
    id: ID,
    name: string
  }
}

interface SetSelectedListAction {
  type: typeof listActionConstants.SELECTED_LIST,
  payload: ID
}

interface AddTaskAction {
  type: typeof listActionConstants.ADD_TASK,
  payload: {
    list: List,
    task: Task
  }
}

export type ListsAction = AddListAction | GetListsAction | SetListIdToDeleteAction | GetListByIdAction | DeleteListAction | SetListToEditAction | UpdateListAction | SetSelectedListAction | AddTaskAction

// states
export interface ListState {
  lists: Lists,
  listIdToDelete: ID,
  listById: List | null,
  listToEdit: List | null,
  selectedList: List | null
}


