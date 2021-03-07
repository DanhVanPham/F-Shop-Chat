import { BASE_URL_RESOURCE_SERVER } from "../constants/url.constant";
import { get } from "../utils/api/apiCaller";

class UserService {
    getContactUsers(){
        return get(BASE_URL_RESOURCE_SERVER,"/users/contacts")
    }
}

export default new UserService();