const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dallas" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Joseph" },
    { id: 4, name: "Eva" },
    { id: 5, name: "Siberia" },
    { id: 6, name: "Tokio" },
  ],
  messages: [
    { id: 1, message: "Tokio is calling Berlin" },
    { id: 2, message: "Tokio is calling Dock" },
    { id: 3, message: "Tokio is calling Albania" },
    { id: 4, message: "Eva" },
    { id: 5, message: "Siberia" },
    { id: 6, message: "Tokio" },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [ ...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
