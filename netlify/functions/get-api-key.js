// 이 코드는 Netlify의 서버에서만 실행됩니다.
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey: process.env.Maps_API_KEY })
  };
};
