import { BASE_URL_WEBSOCKET_SERVER } from "../constants/url.constant";
import { get } from "../utils/api/apiCaller";

class RoomService {
    createRoom(){

    }
    
    getRoom(roomId){
        return get(BASE_URL_WEBSOCKET_SERVER, "/rooms/" + roomId, {}, {});
    }
}

export default new RoomService();