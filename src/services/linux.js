import request from '../utils/request';
import { BASE_URL, PAGE_SIZE } from "../constants";

export function fetch({ page }) {
  return request(`${BASE_URL}/readlinux/${page}`);
}
