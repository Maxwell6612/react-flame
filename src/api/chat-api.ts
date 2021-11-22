
let subscribers = [] as SubscriberType[]

let wsChannel: WebSocket | null = null;

const closeHandler = () => {
                console.log('CLOSE WS')
                setTimeout(createChannel, 3000);
    }

const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            subscribers.forEach(s => s(newMessages))
        } 

function createChannel() {

        wsChannel?.removeEventListener('close', closeHandler)
        wsChannel?.close()
                
        wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        wsChannel.addEventListener('close', closeHandler)
        wsChannel.addEventListener('message', messageHandler)
        }



export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        wsChannel?.removeEventListener('close', closeHandler)
        wsChannel?.removeEventListener('message', messageHandler)
        wsChannel?.close()
        
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter( s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType){
        subscribers = subscribers.filter( s => s !== callback)
    },
    sendMessage(message: string) {
        wsChannel?.send(message)
    }
}

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}