import request from '../utils/request';
import { BASE_URL } from "../constants";

export function fetch({ id }) {
  return request(`${BASE_URL}/fdetail/${id}`)
}
