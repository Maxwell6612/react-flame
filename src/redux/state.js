let rerenderEntireTree = () => {
  console.log('change state')
}

let state = {
      profilePage: {
       
      posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 12 },
        { id: 2, message: 'this is a post?', likesCount: 23 },
        { id: 3, message: 'viva latina?', likesCount: 3 },
      ],
      newPostText: 'jetlag'
    },


      dialogsPage: {
          messages: [
        { id: 1, message: 'Tokio is calling Berlin' },
        { id: 2, message: 'Tokio is calling Dock' },
        { id: 3, message: 'Tokio is calling Albania' },
        { id: 4, message: 'Eva' },
        { id: 5, message: 'Siberia' },
        { id: 6, message: 'Tokio' },
      ],
      dialogs: [
        { id: 1, name: 'Dallas' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Joseph' },
        { id: 4, name: 'Eva' },
        { id: 5, name: 'Siberia' },
        { id: 6, name: 'Tokio' },
      ]
    }
  }

  window.state = state;

  export const addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 14,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
  }

  export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  }

  export const subscribe = (observer) => {
    rerenderEntireTree = observer;    // observer - pattern // like publisher subscriber
  }

  export default state;