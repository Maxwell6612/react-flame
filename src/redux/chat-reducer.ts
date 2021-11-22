import {Action, Dispatch} from 'redux'
import { ChatMessageType, chatAPI } from './../api/chat-api';
import { BaseThunkType } from './redux-store';
import { FormAction } from "redux-form";
import { InferActionsTypes } from './redux-store';


let initialState = {
    messages: [] as ChatMessageType[]
    
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/chat/MESSAGES_RECEIVED', payload: {messages}
    } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe( newMessageHandlerCreator(dispatch) )
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe( newMessageHandlerCreator(dispatch) )
    chatAPI.stop()
}

export const sendMessage = (message:  string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>