import { BASE_URL_RESOURCE_SERVER } from "../constants/url.constant";
import { post } from "../utils/api/apiCaller";
import { get } from "../utils/api/apiCaller";

const BASE_URL = BASE_URL_RESOURCE_SERVER;
class AuthenticationService {
    isLoggedIn = () => {
        // if(JSON.parse(localStorage.getItem("account")) === null || JSON.parse(localStorage.getItem("account")) === undefined){
        //     return false;
        // }
        // const { userId } = JSON.parse(localStorage.getItem("account"));
        // return userId !== "" && userId !== null && userId !== undefined;
        return true;
    }

    getUserName = () => {
        const { userName } = JSON.parse(localStorage.getItem("account"));
        return userName;
    }

    getUserId = () => {
        const { userId } = JSON.parse(localStorage.getItem("account"));
        return userId;
    }

    removeUser = () => {
        localStorage.removeItem("account");
    }

    //login
    login = (credentials) => {
        return post(BASE_URL,"/login", {}, credentials, {});
    }

    //logout
    logout = (username) => {
        return post(BASE_URL,`/users/${username}/logout`, {}, {}, {});
    }

    //get users
    getUser = (username) => {
        return get(BASE_URL,`/users/${username}`, {}, {});
    }
}

export default new AuthenticationService();



