import { BASE_URL_WEBSOCKET_SERVER } from "../constants/url.constant";
import { get, post } from "../utils/api/apiCaller";

class RoomService {
    
    getRoom(roomId){
        return get(BASE_URL_WEBSOCKET_SERVER, "/rooms/" + roomId, {}, {});
    }
}

export default new RoomService();