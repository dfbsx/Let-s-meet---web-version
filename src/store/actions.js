import _, { get } from "underscore";
import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";


export const TOKEN = "TOKEN"
export const ROOM_LIST = "ROOM_LIST";
export const CONNECTION = "CONNECTION";
export const LOADING = "LOADING";
export const ROOM_ID = "ROOM_ID";
export const MESSAGES = "MESSAGES";
export const NEW_MESSAGE = "NEW_MESSAGE";

export const authenticate = (userName, token) => {
  return async (dispatch) => {
     localStorage.setItem('Lets_meeet', JSON.stringify({userName, token}))
    dispatch({ type: TOKEN, data: {userName, token} });
  };
};


export const createConnection = () => {
  return async (dispatch, getState) => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://letsmeetapp.azurewebsites.net/chatter", {
        accessTokenFactory: () => getState().token,
        withCredentials: false,
        transport: HttpTransportType.LongPolling,
      })
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveCurrentAgentRoomList", (rooms) => {
      dispatch({ type: ROOM_LIST, data: rooms });
    });

    connection.on("ReceiveMessage", (message) => {
      console.log("wiadomosc",message)
      //dispatch(getRooms());
      if ( !message.message || message.roomId !== getState().currentRoom){
        return;
      }
       dispatch({ type: NEW_MESSAGE, data: message });
    });

    connection.start().then(() => {
      dispatch({ type: CONNECTION, data: connection });
      dispatch(getRooms());
    });
  };
};

export const join = (roomId) =>{
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, data: true });
    const current = getState().currentRoom
    if(current!=null){
      await leaveRoom()
    }
    console.log("wchodzi tu z id", roomId)
    const connection = getState().connection;
      await connection.invoke('JoinRoom', {roomId: roomId})
      .then(() => {
        console.log("great")
        dispatch({ type: ROOM_ID, data: roomId });
        dispatch({ type: LOADING, data: false });
         //dispatch(getRooms())
      })
      .catch(error=>{
        console.log("fuck", error)
        dispatch({ type: LOADING, data: false });
      })
  }
}

export const create = (Id) =>{
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, data: true });
    const connection = getState().connection;
      await connection.invoke('CreateRoom', {Id:Id})
      .then(() => {
        console.log("great")
        //dispatch({ type: ROOM_ID, data: roomId });
        dispatch({ type: LOADING, data: false });
         //dispatch(getRooms())
      })
      .catch(error=>{
        console.log("fuck", error)
        dispatch({ type: LOADING, data: false });
      })
  }
}

export const sendMessage = (message) =>{
  return async (dispatch, getState) => {
    if (message === null || message === "" || getState().connection.currentRoom===null) {
      return;
    }

    const connection = getState().connection;
    connection.invoke("SendMessage", {
      roomId: getState().currentRoom,
      message: message,
    });
    const tmp = [...getState().messages];
    const tmpMessage = {
      message: message,
      sendByClient: false,
      sent: new Date().toISOString(),
    };
    tmp.push(tmpMessage);
    dispatch({ type: NEW_MESSAGE, data: tmpMessage});
  };
}
export const newRoom = (roomId) =>{
  return async (dispatch, getState) => {
    const current = getState().roomList
      dispatch({ type: ROOM_LIST, data: [...current, roomId] });
  }
}
export const getRooms = () =>{
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, data: true });
    const connection = getState().connection;
      await connection.invoke('GetRoomsList')
      .then((rooms) => {
        console.log("to pokoje", rooms)
        dispatch({ type: ROOM_LIST, data: rooms });
      })
      .catch(error=>{
        console.log("fuck", error)
      })
  }
}
export const leaveRoom = () =>{
  return async (dispatch, getState) => {
    const connection = getState().connection
    connection.connection.send("LeaveRoom", { room: connection.currentRoom }).then(() => {
      dispatch({ type: ROOM_ID, data: null });
    });
  }
}