import axios from "axios";

const baseURL = "http://localhost:3001";

const ClientBase = {
    axiosBase: axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json"
        }
    }),

    get: (path: string, accessToken: string) => {
        return ClientBase.axiosBase.get(path, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

}