import { post } from "../utils/api/apiCaller";
import { get } from "../utils/api/apiCaller";

class AuthenticationService {
    isLoggedIn = () => {
        return false;
    }
    //login
    login = (credentials) => {
        return post("/login", {}, credentials, {});
    }

    //logout
    logout = (username) => {
        return post(`/users/${username}/logout`, {}, {}, {});
    }

    //get users
    getUser = (username) => {
        return get(`/users/${username}`, {}, {});
    }
}

export default new AuthenticationService();



