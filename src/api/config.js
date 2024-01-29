import { QueryClient } from "@tanstack/react-query";

import axios from "axios";

const api = async (params) => {
    const options = {
        baseURL: "https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api",
    };

    if (!params || (params && params.auth === false)) {
        options.headers = {
            "Content-Type": "application/json",
        };
    } else {
        options.headers = {
            "Content-Type": "application/json",
        }
    }

    const instance = axios.create({
        ...options,
    });

    return Promise.resolve(instance);
};

const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (error) => {
                const { response, code } = error;
                const errors = response?.data?.errors ?? undefined;

                if (code === "ERR_BAD_REQUEST") {
                    return errors;
                }

                switch (code) {
                    case "ERR_NETWORK":
                        console.error(
                            "Network error, either one of this is happening: you don't have internet connection / cors error / backend is deploying"
                        );
                        break;
                }
            },
        },
        queries: {
            refetchOnWindowFocus: false,
            onError: (error) => {
                const { response } = error;

                if (response?.data) {
                    switch (response.data.code) {
                        case 401:
                            console.log("Unauthorized");
                            break;
                    }
                }
            },
        },
    },
});

export { api, queryClient };