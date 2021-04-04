import { BASE_URL_WEBSOCKET_SERVER } from "../constants/url.constant";
import { get } from "../utils/api/apiCaller";

class UserService {
    getContactUsers(userId) {
        return get(BASE_URL_WEBSOCKET_SERVER, "" + userId + "/rooms")
    }
}

export default new UserService();