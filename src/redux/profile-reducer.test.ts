import profileReducer, { actions } from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blank', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: "",
};

it('message of new post should be correct', () => {
  // 1. test data
  let action = actions.addPostActionCreator("lets-test-this-shit");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("lets-test-this-shit");
});


it('new post message added', () => {
  //1 test data
  let action = actions.addPostActionCreator("lets test this shit");
  

  //2 action
  let newState = profileReducer(state ,action);

  //3 expectation
  expect(newState.posts[4].message).toBe("lets test this shit");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = actions.deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = actions.deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});