import _ from "lodash";

class Utils {
  constructor() {}

  insertSerialNumberId(payload = [], key = "_id") {
    try {
      if (payload && _.isArray(payload) && payload.length > 0) {
        return payload.map((v, i) => ({
          ...v,
          [key]: ++i,
        }));
      } else return payload;
    } catch (error) {
      console.error(error);
    }
  }

  findLocation(links = [], localUser = "") {
    try {
      return links.find((v) => v.name === localUser.toUpperCase());
    } catch (error) {
      console.error(error);
    }
  }

  fixNull = (data) => {
    return data.filter((val) => {
      return Object.keys(val).map((v) => {
        if (val[v] == null) {
          val[v] = "-";
        }
        return val;
      });
    });
  };

  fixFlag = (data) => {
    return data.filter((val) => {
      if (val.flag === 1) {
        val.flag = true;
      }
      if (val.flag === 99) {
        val.flag = false;
      }
      return val;
    });
  };
}

export const utils = new Utils();
