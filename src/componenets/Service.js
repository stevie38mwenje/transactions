
import { utils } from "../utils/utility";

class Service {
  constructor() {
    this.method = {
      get: "get",
      post: "post",
    };
  }

  splitUrl(url) {
    try {
      let pathArray = url.split("/");
      let protocol = pathArray[0];
      let host = pathArray[2];
      protocol += "//" + host;

      return protocol;
    } catch (error) {}
  }
  // handle40XRedirect(error) {
  //   try {
  //     let { config } = error;
  //     switch (error.response.status) {
  //       case 401:
  //         if (config.url !== login) {
  //           //window.location.href = "/";
  //         }
  //         break;
  //       case 404:
  //         // history.push('/login')
  //         break;
  //       default:
  //         // history.push('/login')
  //         break;
  //     }
  //   } catch (error) {}
  // }
  getErrorResponse(error) {
    try {
      let { response } = error;
      if (response && response.status != 403) {
        let { data, status } = response;
        return { data, status };
      } else return error;
    } catch (error) {
      return error;
      console.log({ error });
    }
  }

  insertSerialNumberIdIfIsGet(response) {
    let { config } = response;
    if (config.method === this.method.get) {
      let { data } = response;
      let { body_list } = data;
      response.dataRes = data;
      response.data = utils.insertSerialNumberId(body_list);
      return response;
    } else return response;
  }
}

const httpMethods = () => {
  return new Service();
};

export const services = httpMethods();
