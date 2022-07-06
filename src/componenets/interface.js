import http from "./httpService";
import config from "../config.json";

export function getAllTransactions(param = {}) {
    const { date_from, date_to } = param;
    let url;
    if (date_from !== "Invalid Date" && date_to !== "Invalid Date") {
        url = `${config.appsServiceBaseUrl}/billing/transactions/all?date_from=${date_from}&date_to=${date_to}`;
    } else {
        url = `${config.appsServiceBaseUrl}/transactions/`;
    }

    return http
        .get(url)
        .catch((error) => {
            console.error(error);
        })
        .then((resp) => resp.dataRes);
}