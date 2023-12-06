/**
 * @brief 프로필 가져오기
 */

const { default: axiosInstance, endpoints } = require("./axios");

/**
Request

X

 */

const getProfile = async () => {
  const response = axiosInstance.post(endpoints.user.profile);
  return response;
};

/**
 Response

 [
    [
        [
            "학부",
            "전산전자공학부",
            "이름",
            "이수민"
        ],
        [
            "학번",
            "22200533",
            "학적",
            "입학"
        ],
        [
            "등록학기 수",
            "4 학기",
            "",
            ""
        ],
        [
            "전공",
            "AI·컴퓨터공학심화(60)"
        ],
        [
            "부전공",
            ""
        ],
        [
            "실무전산/컴퓨터공학 부전공",
            "전산전공"
        ]
    ],
 */
