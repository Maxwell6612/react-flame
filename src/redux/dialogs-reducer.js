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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [ ...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
