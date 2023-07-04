import ky from "ky";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

export const api = ky.create({
  prefixUrl: "http://localhost:8000",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = localStorage.getItem(LocalStorageKeys.TOKEN);

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    // TODO
    // afterResponse: [
    //   (response)
    // ],
    beforeError: [
      (error) => {
        return error.response.json();
      }
    ],
  },
});
