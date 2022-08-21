// https://developer.chrome.com/docs/extensions/mv3/devtools/

/**
 * @NOTE
 * devtools.html안에다 로드된 경우에만
 * chrome.devtools.* API가 정상 작동한다고 한다.
 * (manifest.json에 추가적으로 필드를 명시해줘야함)
 */

chrome.devtools.network.getHAR((log) => {
  console.log(log);
});
