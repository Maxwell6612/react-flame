import { InferActionsTypes } from './redux-store';

type DialogType = {
  id: number,
  name: string
}

type MessageType = {
  id: number,
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Dallas" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Joseph" },
    { id: 4, name: "Eva" },
    { id: 5, name: "Siberia" },
    { id: 6, name: "Tokio" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Tokio is calling Berlin" },
    { id: 2, message: "Tokio is calling Dock" },
    { id: 3, message: "Tokio is calling Albania" },
    { id: 4, message: "Eva" },
    { id: 5, message: "Siberia" },
    { id: 6, message: "Tokio" },
  ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [ ...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>