import request from "../utils/request";
import { endpoint } from "../utils/config";

export function getDashBoardData() {
  return request(
    `${endpoint}/executive-dashboard/?session-id=2018/2019&term-id=FIRST`
  );
}
