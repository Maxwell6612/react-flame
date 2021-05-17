import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "this is a post?", likesCount: 23 },
        { id: 3, message: "viva latina?", likesCount: 3 },
      ],
      newPostText: "jetlag",
    },

    sidebar: {},

    dialogsPage: {
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
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer - pattern // like publisher subscriber
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
