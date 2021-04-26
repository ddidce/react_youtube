if (process.env.NODE_ENV === "") {
  // 프로덕트일때 실제개발할땐 히로쿠에서 사용
  module.exports = require("./prod");
} else {
  // 로킬일때
  module.exports = require("./dev");
}
