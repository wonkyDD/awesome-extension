/**
 * @TODO
 * chrome.storage(.sync)를 관리하는데
 * service worker의 역할
 */

chrome.runtime.onInstalled.addListener(() => {
  const color = '#3aa757';
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.runtime.onMessage.addListener((url, sender, sendResponse) => {
//   console.log(`Hello I'm OnMessage! Get msg like this: ${url}`);
//   console.log('id : ', sender.id);
//   sendResponse('From Background,,,');
// });

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});
