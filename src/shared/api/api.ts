import ky from "ky";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

export const api = ky.create({
  prefixUrl: __BASE_URL__,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = localStorage.getItem(LocalStorageKeys.TOKEN);

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    beforeError: [
      (error) => error.response.json(),
    ],
  },
});
