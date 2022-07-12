import axios from "axios";

export const getList = (params) => {
  return axios({
    url: '',
    method: 'get',
    params
  })
}