/**
 * dom조작 -> content script
 * 그래서 ext를 tsx로 준거
 */

const dom = (s: any) => {
  const b = document.querySelector('body');
  console.log(s);
  console.log(b);
};

dom('Control your dom in content script');
