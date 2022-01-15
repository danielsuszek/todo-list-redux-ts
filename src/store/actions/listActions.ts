import * as listTypes from "../constants/listActionContstants"

import { List, ListsAction } from "../type"

export const addList = (list: List): ListsAction => {
  return {
    type: listTypes.ADD_LIST,
    payload: list
  }
}
