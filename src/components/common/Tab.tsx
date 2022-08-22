import React from 'react';
import styled from 'styled-components';

/**
 * @TODO
 * 1. 현재 탭에 있다는 걸 확실하게 구분되게 하기
 */

const TabBlock = styled.div`
  display: inline;
`;

interface Prop {
  tabName: string;
}

export default function Tab(props: Prop) {
  const { tabName } = props;
  return <TabBlock>{tabName}</TabBlock>;
}
