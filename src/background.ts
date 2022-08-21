// import downloader from "./downloader";

chrome.runtime.onInstalled.addListener(() => {
  const color = '#3aa757';
  console.log('Default background color set to %cgreen', `color: ${color}`);
  // chrome.storage.sync.set({ color });
  // chrome.storage.sync.get
  /**
   * @TODO
   * 1. execute script로 koa를 돌릴까?
   * 2. sub-process 로 koa를 실행시킬까?
   *
   * 장기적으로 extension들을 짬통처리 할 거기때문에
   * 로컬로 돌리는 웹서버가 하나 있는 게 편할것 같아서 꼭 필요하다.
   */
});

/**
 * @TODO
 * url 다음인자로 sender를 줄 수 있음!
 *
 * @TODO
 * 왜 console에 log가 2번씩 찍히는지 알아야 함(popup.tsx의 문제?)
 */
chrome.runtime.onMessage.addListener((url) => {
  console.log(`Hello I'm OnMessage! Get msg like this: ${url}`);
});

/**
 * @NOTE
 * Command로 background에서 Trigger할 수 있음
 * (manifest.json에서 단축키이름 특별하게 지어야함)
 * (단축키도 겹치지 않게 배당해야함 : alt + e 같은 거는 X)
 */
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});

/**
 * @TODO
 * onClicked는 참고로 popup을 띄울경우 작동하지 않는다.
 *
 * execute script를 할때
 * 함수를 실행시키거나, file자체를 넣어버릴 수 있다
 */
// function contentScriptFunc(name: any) {
//   alert(`"${name}" executed`);
// }
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id! },
//     (1)func: contentScriptFunc,
//        args: ['action'],
//     (2)files: ['content.js'],
//   });
// });
