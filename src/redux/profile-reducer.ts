import { InferActionsTypes, BaseThunkType } from './redux-store';
import { PostType, ProfileType, PhotosType } from './../types/types';
import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from '../api/profile-api';

let initialState = {
  posts: [
    { id: 1, message: "hi, how are you?", likesCount: 12 },
    { id: 2, message: "this is a post?", likesCount: 23 },
    { id: 3, message: "viva latina?", likesCount: 3 },
  ] as Array<PostType>,
  newPostText: "",
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
      case 'SN/PROFILE/ADD-POST': {
          let newPost = {
              id: 5,
              message: action.newPostText,
              likesCount: 0
          };
          return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ''
          };
      }
      case 'SN/PROFILE/SET_STATUS': {
          return {
              ...state,
              status: action.status
          }
      }
      case 'SN/PROFILE/SET_USER_PROFILE': {
          return {...state, profile: action.profile}
      }

      case 'SN/PROFILE/DELETE_POST':
          return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

      case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
          debugger;
          return {...state, profile: {...state.profile, photos: action.photos } as ProfileType}
      default:
          return state;
  }
}

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
  setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
  setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
  deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(data));
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);

  if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
  }
}
export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(photoFile);

  if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos));
  }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);

  if (data.resultCode === 0) {
    if (userId != null) {
        dispatch(getUserProfile(userId))
    } else {
        throw new Error("userId can't be null")
    }
} else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
    return Promise.reject(data.messages[0])
}
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>