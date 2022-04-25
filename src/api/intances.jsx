import axios from "axios";


var baseUrl = "https://localhost:44357/api";
axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "1800",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
        // "Access-Control-Allow-Origin" : "PUT, POST, GET, DELETE, PATCH, OPTIONS",
    }
})
export const login = (params) => {
    return axios.post(baseUrl+'/Customer/SignIn/'+params.account+'/'+params.password);
};

