import fetch from "isomorphic-fetch";
import { METHOD } from "../consts";

const { REACT_APP_BASE_PATH } = process.env;

export const request = ({ endpoint, method, body, headers } = {}) => {
  if (!endpoint || !endpoint.trim())
    throw new Error("You need to pass an endpoint");
  if (!method) method = METHOD.GET;
  if (!headers) headers = { "Content-Type": "application/json" };
  else if (!"Content-Type" in headers)
    headers["Content-Type"] = "application/json";

  const apiRequest = {
    method,
    headers,
    body: body && JSON.stringify(body),
  };

  const apiUrl = REACT_APP_BASE_PATH + endpoint;

  return fetch(apiUrl, apiRequest)
    .then((res) => {
      if (
        res.headers.get("Content-Type").indexOf("application/json") > -1 ||
        res.headers.get("Content-Type").indexOf("text/plain") > -1
      ) {
        return res.json();
      }
      return res;
    })
    .catch((res) => {});
};
