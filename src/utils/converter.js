export const lectureConverter = (eng) => {
  switch (eng) {
    case "chapel":
      return "채플";
    case "firstFaith":
      return "신앙1";
    case "secondFaith":
      return "신앙2";
    case "firstWorld":
      return "세계관1";
    case "secondWorld":
      return "세계관2";
    case "team":
      return "팀모임";
    case "service":
      return "사회봉사";
    case "edu":
      return "한동인성교육";
    case "BSM":
      return "BSM";
    case "english":
      return "영어과목";
    case "professionalCulture":
      return "전문 교양";
    case "ICT":
      return "ICT 융합 기초";
    case "culture":
      return "교양";
    case "BSMSet":
      return "BSM 중 조합으로 들어야 하는 과목";
    case "majorEssential":
      return "전공 필수";
    case "majorChoice":
      return "전공 선택 필수";
    case "design":
      return "설계 학점";
    default:
      return "기타";
  }
};
