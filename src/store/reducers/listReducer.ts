import * as actionTypes from '../constants/listActionContstants'

import { ListsAction, ListState, Lists } from '../type'

const initialState: ListState = {
  lists: {},
  listIdToDelete: '',
  listById: null,
  listToEdit: null,
  selectedList: null,
  taskToDelete: null,
  taskToEdit: null
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
        listIdToDelete: action.payload,
        selectedList: null
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
        listById: null,
        
      }
    case actionTypes.SET_LIST_TO_EDIT: {
      const listToEdit = listsFromLS[action.payload]
      return {
        ...state,
        listToEdit
      }
    }
    case actionTypes.UPDATE_LIST: {
      const listsFromLS3 = {...listsFromLS}
      listsFromLS3[action.payload.id].name = action.payload.name
      saveListsToLS(listsFromLS3)
      return {
        ...state,
        lists: listsFromLS,
        listToEdit: null,
        selectedList: null
      }
    }
    case actionTypes.SELECTED_LIST:
      const selectedList = listsFromLS[action.payload]
      return {
        ...state,
        selectedList
      }
    
    case actionTypes.ADD_TASK: {
      const clonedListsToAddTask = {...listsFromLS}
      clonedListsToAddTask[action.payload.list.id].tasks.push(action.payload.task)
      saveListsToLS(clonedListsToAddTask)
      
      return {
        ...state,
        lists: clonedListsToAddTask,
        selectedList: clonedListsToAddTask[action.payload.list.id]
      }
    }

    case actionTypes.SET_TASK_TO_DELETE: {
      return {
        ...state,
        taskToDelete: {
          list: action.payload.list,
          task: action.payload.task
        }
      }
    }
    case actionTypes.DELETE_TASK: {
      const allListsToTaskDelete = {...listsFromLS}
      const allTasksToTaskDelete = [...allListsToTaskDelete[state.taskToDelete!.list.id].tasks];
      const taskToDelete = allTasksToTaskDelete.find(task => task.id === state.taskToDelete!.task.id)

      allTasksToTaskDelete.splice(allTasksToTaskDelete.indexOf(taskToDelete!), 1)
      allListsToTaskDelete[state.taskToDelete!.list.id].tasks = allTasksToTaskDelete
      saveListsToLS(allListsToTaskDelete)
      
      return {
        ...state,
        lists: allListsToTaskDelete,
        selectedList: allListsToTaskDelete[state.taskToDelete!.list.id],
        taskToDelete: null
      }
    }
    case actionTypes.UNSET_TASK_TO_DELETE: {
      return {
        ...state,
        taskToDelete: null
      }
    }
    case actionTypes.SET_TASK_TO_EDIT: {
      return {
        ...state,
        taskToEdit: {
          list: action.payload.list,
          task: action.payload.task
        }
      }
    }
    case actionTypes.EDIT_TASK: {
      const clonedAllListsToEditTask = {...listsFromLS}
      const clonedListToEditTask = {...clonedAllListsToEditTask[action.payload.list.id]}
      const clonedAllTasksToEdit = [...clonedListToEditTask.tasks]
      
      const findTaskToEdit = clonedAllTasksToEdit.find(task => task.id === action.payload.taskId)
      const taskToEdit = {...findTaskToEdit!}
      taskToEdit.name = action.payload.taskContent
      taskToEdit.completed = action.payload.taskCompleted
      
      const updatedTasks = clonedAllTasksToEdit.map(task => (task.id === taskToEdit.id) ? taskToEdit : task)
      clonedListToEditTask.tasks = updatedTasks
      clonedAllListsToEditTask[clonedListToEditTask.id] = clonedListToEditTask
      saveListsToLS(clonedAllListsToEditTask)
            
      return {
        ...state,
        lists: clonedAllListsToEditTask,
        selectedList: clonedListToEditTask,
        taskToEdit: null
      }
    }
    case actionTypes.UNSET_TASK_TO_EDIT: {
      return {
        ...state,
        taskToEdit: null
      }
    }
    default:
      return state
  }
}


