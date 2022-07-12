import http from "./httpService";
import axios from "axios";

export function getAllTransactions(param = {}) {
    const { date_from, date_to , user_Id} = param;
    let url;
    if (date_from !== "Invalid Date" && date_to !== "Invalid Date" && user_Id !== "Invalid UserId" ) {
        url  = `http://127.0.0.1:8081/transactions/search?datefrom=${date_from}&dateto=${date_to}&userId=${user_Id}`;
    } else {
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
    return axios
        .get("http://127.0.0.1:8081/transactions/")
        .then((resp) => resp.dataRes)
        .catch((error) => {
            console.error(error);
        });
}

export function getUserTransactions(id) {
    return axios
        .get("http://127.0.0.1:8081/transactions/${id}")
        .then((resp) => resp.dataRes)
        .catch((error) => {
            console.error(error);
        });
}

