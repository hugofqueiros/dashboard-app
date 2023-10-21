import useWebSocket, { ReadyState } from 'react-use-websocket';

const SOCKETURL = "wss://ws.coincap.io/prices?assets=bitcoin"

export const BitcointCurrentValue = () => {
    const { lastMessage, readyState } = useWebSocket(SOCKETURL);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[readyState];
    
    return (
        <>
            <p>The WebSocket is currently {connectionStatus}</p>
            {lastMessage ? <p>Last message: {lastMessage.data}</p> : "WAIT FOR IT if connection is open"}
        </>
    );
};

