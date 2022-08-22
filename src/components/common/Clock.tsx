import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ClockBlock = styled.div`
  display: inline;
`;

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

function getDateInfo(today: Date) {
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);
  const weekDay = weekDays[today.getDay()];
  const hours = `0${today.getHours()}`.slice(-2);
  const minutes = `0${today.getMinutes()}`.slice(-2);
  const seconds = `0${today.getSeconds()}`.slice(-2);
  return [`${month}월 ${day}일 ${weekDay}`, `${hours}:${minutes}:${seconds}`];
}

export default function Clock() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestAnimationRef = useRef<number | null>(null);

  function render() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const today = new Date();
    const info = getDateInfo(today);
    const ymdw = info[0];
    const hms = info[1];

    context!.clearRect(0, 0, canvas!.width, canvas!.height);
    context!.font = '2em serif';
    context!.fillStyle = 'white';
    context!.textAlign = 'center';
    context!.textBaseline = 'middle';
    context!.fillText(`${ymdw}  ${hms}`, canvas!.width / 2, canvas!.height / 2);
    requestAnimationRef.current = requestAnimationFrame(render);
  }

  useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(requestAnimationRef.current!);
    };
  });

  return (
    <ClockBlock>
      <canvas ref={canvasRef} />
    </ClockBlock>
  );
}
