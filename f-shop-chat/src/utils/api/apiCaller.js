import Axios from 'axios';

export const defaultHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

export const request = (baseUrl,endpoint, method, headers, body, params) => {
    return Axios(
        {
            url: baseUrl + endpoint,
            method: method,
            headers: { ...defaultHeader, ...headers },
            data: body,
            params: Object.assign(params),
            withCredentials: true
        }
    )
}

export const get = (baseUrl,endpoint, headers = {}, params = {}) => {
    return request(baseUrl, endpoint, "GET", headers, null, params);
}

export const post = (baseUrl, endpoint, headers = {}, body = {}, params = {}) => {
    return request(baseUrl, endpoint, "POST", headers, body, params);
}

export const put = (baseUrl, endpoint, headers = {}, body = {}, params = {}) => {
    return request(baseUrl, endpoint, "PUT", headers, body, params);
}

export const remove = (baseUrl, endpoint, headers = {}, body = {}, params = {}) => {
    return request(baseUrl, endpoint, "DELETE", headers, body, params);
}






