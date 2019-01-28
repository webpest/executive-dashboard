import request from "../utils/request";
import { endpoint } from "../utils/config";

export function getSchools() {
  return request(
    `http://staging.safsms.cloud/api/v1/executive-dashboard/schools/?session-id=2018/2019&term-id=FIRST`
  );
}

export function getSchool(schoolId) {
  return request(
    `http://staging.safsms.cloud/api/v1/executive-dashboard/schools/${schoolId}/?session-id=2018/2019&term-id=FIRST`
  );
}
