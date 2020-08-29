import axios from "axios";
import store from "@/store";

class ApiService {
    constructor() {
        this.baseUrl = "/api/";
        this.connection = axios.create();
        this.connection.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Retorne logo o que interessa do response
                return response.data;
            },
            function (error) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                let message = "";
                if (!error.response) {
                    message = "Erro de conexão.";
                } else {
                    switch (error.response.status) {
                        case 401:
                            message = "Login expirado.";
                            store.commit('storeToken', null);
                            break;

                        case 403:
                            if (typeof error.response.data === 'object') message = error.response.data.errors;
                            else message = error.response.data;
                            break;

                        case 404:
                            message = "Recurso não encontrado.";
                            break;

                        case 422:
                            if (typeof error.response.data === 'object') {
                                let errors = error.response.data.errors;
                                message = Object.values(errors)[0];
                            }
                            else message = error.response.data;
                            break;

                        case 500:
                            message = "Erro interno.";
                            break;

                        default:
                            message = error.response.data;
                            break;
                    }
                }

                return Promise.reject(message);
            });
    }

    get(url, params) {
        const requestUrl = this.baseUrl + url;

        return this.connection({
            method: 'get',
            url: requestUrl,
            params: params,
            headers: { Authorization: "Bearer " + (store.state.token || '') }
        })

    }

    post(url, params) {
        const requestUrl = this.baseUrl + url;

        return this.connection({
            method: 'post',
            url: requestUrl,
            data: params,
            headers: { Authorization: "Bearer " + (store.state.token || '') }
        })

    }

    put(url, params) {
        const requestUrl = this.baseUrl + url;

        return this.connection({
            method: 'put',
            url: requestUrl,
            data: params,
            headers: { Authorization: "Bearer " + (store.state.token || '') }
        })

    }

    delete(url, params) {
        const requestUrl = this.baseUrl + url;

        return this.connection({
            method: 'delete',
            url: requestUrl,
            params: params,
            headers: { Authorization: "Bearer " + (store.state.token || '') }
        })

    }

}
export const apiService = new ApiService();
export default ApiService;