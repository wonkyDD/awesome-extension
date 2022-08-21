import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';

function Popup() {
  const [response, setResponse] = useState<string>();
  const regexTwitterRanking = /^(https?:\/\/)?(video.twimg.com)\//;

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { url } = tabs[0];
      if (regexTwitterRanking.test(url || '')) {
        setResponse(`Yes, It's twitter ranking vid link ${url}`);
        chrome.runtime.sendMessage(url, (res: any) => {
          console.log(res); // 아무런 효과 없는 거임
        });
      } else {
        setResponse(`No, you are not on a twitter ranking site ${url}`);
      }
    });
  });

  return <div>{response}</div>;
}

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);
root.render(<Popup />);
