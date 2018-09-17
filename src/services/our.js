import request from '../utils/request';
import { PAGE_SIZE, BASE_URL } from "../constants";

export function fetch({ page }) {
  return request(`${BASE_URL}/readour/${page}`);
}
