import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/List?_page=${page}&_limit=${PAGE_SIZE}`);
}
