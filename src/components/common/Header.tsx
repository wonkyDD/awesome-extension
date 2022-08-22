import React from 'react';
import styled from 'styled-components';
import { MdOutlineMenu, MdOutlineSettings } from 'react-icons/md';
import Clock from './Clock';

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 3rem;
  background: black;
  .headerBlock__btn {
  }
  .headerBlock__icon {
  }
`;

export default function Header() {
  return (
    <HeaderBlock>
      <button className='headerBlock__btn'>
        <MdOutlineMenu className='headerBlock__icon' />
      </button>
      <Clock />
      <button className='headerBlock__btn'>
        <MdOutlineSettings className='headerBlock__icon' />
      </button>
    </HeaderBlock>
  );
}
