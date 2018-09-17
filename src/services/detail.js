import request from '../utils/request';
import { BASE_URL } from "../constants";

export function fetch({ id }) {
  // fetch 文档详情
  return request(`${BASE_URL}/detail/${id}`);
}
