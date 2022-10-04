import { ActionType } from "./actionType"

export  const AddUser = user =>({
    type: ActionType.ADD_USER,
    payload: user,
});

export  const RemoveData = user =>({
    type: ActionType.REMOVE_DATA,
    payload: user,
});