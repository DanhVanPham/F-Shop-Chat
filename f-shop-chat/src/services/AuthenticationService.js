import { post } from "../utils/api/apiCaller";
import { get } from "../utils/api/apiCaller";

class AuthenticationService {
    //login
    login = (credentials) => {
        return post("/login", {}, credentials, {});
    }

    //logout
    logout = async (username) => {
        return await post(`/users/${username}/logout`, {}, {}, {});
    }

    //get users
    getUser = async (username) => {
        return await get(`/users/${username}`, {}, {});
    }
}

export default new AuthenticationService();



