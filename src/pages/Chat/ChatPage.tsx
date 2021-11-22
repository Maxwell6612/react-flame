import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatMessageType } from "../../api/chat-api";
import { sendMessage, startMessagesListening, stopMessagesListening } from "../../redux/chat-reducer";
import { AppStateType } from "../../redux/redux-store";


const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])
    
    return <div>
        <Messages />
        <AddMessageForm />
    </div>
}

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector( (state: AppStateType) => state.chat.messages)

    return <div style={{ height: '400px', overflowY: 'auto'}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return <div>
        <img alt='' src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}


const AddMessageForm: React.FC<{}> = ({}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useDispatch()
    
    const sendMessageHandler = () => {
        if (!message) {
            return;
        }

        dispatch(sendMessage(message));
        setMessage('')
    }

    return <div>
       <div
        ><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
       </div> 
        <div>
            <button disabled={false} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}

export default ChatPage