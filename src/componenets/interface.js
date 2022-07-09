import http from "./httpService";
import config from "../config.json";
import axios from "axios";

export function getAllTransactions(param = {}) {
    const { date_from, date_to } = param;
    let url;
    if (date_from !== "Invalid Date" && date_to !== "Invalid Date") {
        url = `${config.appsServiceBaseUrl}/billing/transactions/all?date_from=${date_from}&date_to=${date_to}`;
    } else {
        // url = `${config.appsServiceBaseUrl}/transactions/`;
        url = `http://127.0.0.1:8081/transactions/`;
    }

    return http
        .get(url)
        .catch((error) => {
            console.error(error);
        })
        .then((resp) => resp.dataRes);
}



export function getTransactions() {
    // return http.get(`${employeeManager}/employees`);
    return axios
        .get("http://127.0.0.1:8081/transactions/")
        .then((resp) => resp.dataRes)
        .catch((error) => {
            console.error(error);
        });
}

export function getUserTransactions(id) {
    // return http.get(`${employeeManager}/employees`);
    return axios
        .get("http://127.0.0.1:8081/transactions/${id}")
        .then((resp) => resp.dataRes)
        .catch((error) => {
            console.error(error);
        });
}

