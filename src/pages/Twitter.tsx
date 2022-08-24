/**
 * @TODO
 * 1. 실시간을 누르는 순간, 필터링 api를 요청
 *  - 현재 동영상 링크를 다 읽어서 보낸다
 *  - backend에서 다운로드 테이블을 검사
 *  - get할때 보내온 링크리스트들과 비교
 *  - 다운로드 된 애들의 경우 제거
 *  - 다운로드 안된놈들의 링크만 담아서 응답
 *
 * 2. content_twitter.tsx에서 ...
 *  - 방안 a) 1에서 받아온 정보를 바탕으로 화면을 다시 그림
 *  - 방안 b) 정보로 바로 새탭을 쫘르륵 열어버리기
 *
 * 3. video 화면
 *  - video.twing.com 형식에대해 content_twitter.tsx가 팝업 div를 띄움
 *  - 팝업 div에는 Yes와 No가 있고
 *  - 각각에는 eventlistener가 있어서 keydown으로 y, n이 매칭
 *  - n이 입력시 탭을 닫고, y를 입력시 다운로드 api를 요청
 *
 * 4.
 *  - n,y 모두 s3에 등록하기위한 api를 또 요청해줘야한다
 *  - y를 눌렀을때는 :누르고 다운로드 누르는 동작을
 *  content_twitter.tsx가 해줘야한다
 */

import React from 'react';

export default function Twitter() {
  return <div>Twitter Page</div>;
}
