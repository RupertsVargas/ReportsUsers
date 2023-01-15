import {urlCookie} from "../js/UrlAlot";
export const api = {
    get,
    post,
    put,
    delete: deleted
};
// alert();
// var urlCookie_ = Cookies.get('url') == undefined ? "http://localhost/checker/" : Cookies.get('url');
var urlCookie_ = urlCookie;
async function apiCall(url, options) {
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
    };

//  URL LOCAL http://localhost/Nerdino_ReactAndPHP_Test/PHPAPIServer/api/${url}

// const link_ = "http://localhost/Nerdino_ReactAndPHP_Test/PHPAPIServer/api/";
// URL PRODUCCIION
const link_ = urlCookie_;


console.log(`${link_}${url}`);
// export var urlCookie = "https://www.personalchecker.com/";


    // options.headers = { ...options.headers, ...headers };
    console.log(options);
    return fetch(`${link_}${url}`, options)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                const contentType = response.headers.get('content-type');

                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json();
                } else {
                    return response.text();
                }
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            // alert();
            return Promise.reject(error);
        });
}

async function get(resource) {
    const options = { method: 'GET' };

    return await apiCall(resource, options);
}

async function post(resource, data,isJsonThePost=false) {

    data = isJsonThePost ? JSON.stringify(data) : data;
    const options = { method: 'POST', body: data };

    return await apiCall(resource, options);
}

async function put(resource, data) {
    const options = { method: 'PUT', body: JSON.stringify(data) };

    return await apiCall(resource, options);
}

async function deleted(resource) {
    const options = { method: 'DELETE' };

    return await apiCall(resource, options);
}



