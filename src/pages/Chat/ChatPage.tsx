import React, { useEffect, useState } from "react";

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {
        const [ws, setWsChannel] = useState<WebSocket | null>(null)
        
        useEffect(() => {
            let wsChannel: WebSocket;
            const closeHandler = () => {
                console.log('CLOSE WS')
                setTimeout(createChannel, 3000);
    }
            function createChannel() {

                wsChannel?.removeEventListener('close', closeHandler)
                wsChannel?.close()
                
                wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
                wsChannel.addEventListener('close', closeHandler)
        setWsChannel(wsChannel)
        }
        createChannel();

        return () => {
            wsChannel.removeEventListener('close', closeHandler)
            wsChannel.close()
        }
    }, [])

    return <div>
        <Messages ws={ws}/>
        <AddMessageForm ws={ws}/>
    </div>
}

const Messages: React.FC<{ws: WebSocket | null}> = ({ws}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        ws?.addEventListener('message', messageHandler)

        return () => {
            ws?.removeEventListener('message', messageHandler)
        }
    }, [ws])

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


const AddMessageForm: React.FC<{ws: WebSocket | null }> = ({ws}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    
    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        }
        ws?.addEventListener('open', openHandler)
        return () => {
            ws?.removeEventListener('open', openHandler)
        }
    }, [ws])
    
    const sendMessage = () => {
        if (!message) {
            return;
        }

        ws?.send(message);
        setMessage('')
    }

    return <div>
       <div
        ><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
       </div> 
        <div>
            <button disabled={ ws === null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    </div>
}

export default ChatPage