/* eslint-disable @typescript-eslint/no-explicit-any */
import { Api } from "common/types/api";
import qs from "qs";

const radiusClient = new Api({
  baseURL: window.location.origin,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
  headers: {
    "X-CSRF-TOKEN-RADIUS": (window as any).RequestVerificationToken
      ? (window as any).RequestVerificationToken
      : "",
  },
});

export default radiusClient;
