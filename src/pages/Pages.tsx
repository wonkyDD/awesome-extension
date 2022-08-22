import React from 'react';

import Home from './Home';
import Twitter from './Twitter';
import Xvid from './Xvid';
import Kiss from './Kiss';
import Dcinside from './Dcinside';
import Resolution from './Resolution';
import SettingPage from './SettingPage';
import SideBar from './SideBar';

export default function Pages() {
  return (
    <div>
      <Home />
      <Twitter />
      <Xvid />
      <Kiss />
      <Dcinside />
      <Resolution />
      <SideBar />
      <SettingPage />
    </div>
  );
}
