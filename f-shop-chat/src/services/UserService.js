import { get } from "../utils/api/apiCaller";

class UserService {
    getContactUsers(){
        return get("/users/contacts")
    }
}

export default new UserService();