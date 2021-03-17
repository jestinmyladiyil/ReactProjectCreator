import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { METHOD } from "../../utilities/consts";
import { showLoader, hideLoader } from "../loading";
import { addErrorMessage } from "../messages";

export const apiCall = createAction("api/call");

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCall.type) return next(action);

  next(action);
  let {
    url,
    method,
    data,
    headers,
    onSuccess,
    onError,
    loading,
  } = action.payload;

  if (!url)
    store.dispath(addErrorMessage("url is mandatory to make api calls"));
  if (!method) method = METHOD.GET;
  if (!headers) headers = { "Content-Type": "application/json" };
  else if (Object.keys(headers).indexOf("Content-Type") > -1)
    headers["Content-Type"] = "application/json";
  if (loading) store.dispath(showLoader());

  try {
    const response = await axios.request({
      baseURL: process.env.REACT_APP_BASE_PATH,
      url,
      method,
      data,
      options: { headers },
    });
    if (loading) store.dispath(hideLoader());
    if (onSuccess) store.dispath({ type: onSuccess, payload: response.data });
  } catch (error) {
    if (loading) store.dispath(hideLoader());
    if (onError) store.dispath({ type: onError, payload: error });
  }
};

export default api;
