import { post } from "../utils/api/apiCaller";
import { get } from "../utils/api/apiCaller";

class AuthenticationService {
    isLoggedIn = () => {
        if(JSON.parse(localStorage.getItem("account")) === null || JSON.parse(localStorage.getItem("account")) === undefined){
            return false;
        }
        const { userId } = JSON.parse(localStorage.getItem("account"));
        console.log(userId)
        return userId !== "" && userId !== null && userId !== undefined;
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



