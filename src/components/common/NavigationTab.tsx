import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

/**
 * @TODO
 * 1. 클릭으로 넘기는게 아니라, 단축키로 tab을 넘기고 싶음
 * (alt + 1, alt + 2, alt + 3 ... 이런식이면 어떨까?)
 * - 어차피 폼으로 있는거임;넘겨봤자 현재 url 호스트기준으로
 * 렌더링 상태를 결정하니까
 *
 * 2. tab전환시 2가지 애니메이션이 있었으면 좋겠음
 * - NavigationTab의 내에서 애니메이션
 *  - Datepicker같은 느낌으로 가능할까?
 * - tab바뀌는 애니메이션
 */

const NavigationTabBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2rem;
`;

export default function NavigationTab() {
  return (
    <NavigationTabBlock>
      <Tab tabName='Home' />
      <Tab tabName='Twitter' />
      <Tab tabName='Xvid' />
      <Tab tabName='Dcinside' />
      <Tab tabName='Resolution' />
    </NavigationTabBlock>
  );
}
