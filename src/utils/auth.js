const { default: axiosInstance, endpoints } = require("./axios");

/**
 * @brief 로그인
 * @param loginData
 
request body

 {
    "id" : "히즈넷 아이디", - [String]
    "password" : "히즈넷 비밀번호" - [String]
 }

response body

21800000
 */

export const userLogin = async (loginData) => {
  const response = axiosInstance.post(endpoints.auth.signIn, loginData);
  return response;
};

/**
 * @brief 회원 가입
 * @param registerData
 
request body

 {
    "id" : "히즈넷 아이디", - [String]
    "password" : "히즈넷 비밀번호" - [String]
 }

response body

{
    "id": "학번", - [String]
    "name": "이름", - [String]
    "session": "히즈넷 세션 정보", - [String]
    "token": "JWT 토큰" - [String]
}
 */

export const userRegister = async (registerData) => {
  const response = axiosInstance.post(endpoints.auth.signUp, registerData);
  return response;
};
