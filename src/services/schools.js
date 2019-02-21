import { endpoint } from "../utils/config";
import request from "../utils/request";

export function getSchools() {
  return request(
    `${endpoint}/executive-dashboard/schools/?session-id=2018/2019&term-id=FIRST`
  );
}

export function getSchool(schoolId) {
  return request(
    `${endpoint}/executive-dashboard/schools/${schoolId}/?session-id=2018/2019&term-id=FIRST`
  );
}
