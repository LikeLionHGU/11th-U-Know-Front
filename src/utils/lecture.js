// taken: "/user/get/lecture/list",
// pass: "/user/get/lecture/subject",

const { default: axiosInstance, endpoints } = require("./axios");

/**
 * @brief 강의 가져오기
 * @description 사용자가 들은 과목 정보를 가져옵니다.
 */

/**
 @Request

 X

 */

/**
    @Response 
    
    []

  */
const getLecture = async () => {
  const response = axiosInstance.post(endpoints.user.lecture.taken);
  return response;
};

/**
 * @brief 과목 가져오기 (합격 여부 포함)
 * @description 사용자가 들은 과목 정보를 가져옵니다.
 * @request X
 * @response 
 * 
 [
    {
        "userLectureResponseList": [],
        "lectureType": "chapel",
        "credit": 0.0,
        "totalCredit": 0.0,
        "isPassed": false
    },
    {
        "userLectureResponseList": [],
        "lectureType": "firstFaith",
        "credit": 0.0,
        "totalCredit": 2.0,
        "isPassed": false
    },
   ...
]

*/

const getLectureWithPass = async () => {
  const response = axiosInstance.post(endpoints.user.lecture.pass);
  return response;
};