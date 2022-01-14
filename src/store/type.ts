export const GET_LISTS = 'GET_LISTS'

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