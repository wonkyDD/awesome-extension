import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import styled from 'styled-components';
import { Header, NavigationTab } from './components/common';
import { Home, Twitter, Dcinside, Xvid, Kiss } from './pages';
import { regexTwitterRanking, regexDcinside, regexKiss, regexXvid, regexYoutube, regexTwitch } from './regex';

const PopupBlock = styled.div``;

interface Prop {
  siteName: string | undefined;
}

const Page = (props: Prop) => {
  const { siteName } = props;
  switch (siteName) {
    case 'Twitter':
      return <Twitter />;
    case 'Dcinside':
      return <Dcinside />;
    case 'Xvid':
      return <Xvid />;
    case 'Kiss':
      return <Kiss />;
    default:
      return <Home />;
  }
};

const Popup = () => {
  const [siteName, setSiteName] = useState<string>();

  /**
   * @TODO
   * youtube, twitch 처리
   */
  const checkSite = (url: string) => {
    if (regexTwitterRanking.test(url)) setSiteName('Twitter');
    else if (regexKiss.test(url)) setSiteName('Kiss');
    else if (regexXvid.test(url)) setSiteName('Xvid');
    else if (regexDcinside.test(url)) setSiteName('Dcinside');
    else if (regexYoutube.test(url)) setSiteName('Youtube');
    else if (regexTwitch.test(url)) setSiteName('Twitch');
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { url, id } = tabs[0];

      checkSite(url || '');
      chrome.tabs.sendMessage(id!, 'hello', (res: any) => {
        console.log(res);
      });
    });
  });

  return (
    <PopupBlock>
      <Header />
      <NavigationTab />
      <Page siteName={siteName} />
    </PopupBlock>
  );
};

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);
root.render(<Popup />);
