/**
 * @TODO
 * - Main
 *  - Normal
 *    - Clock
 *    - Jumper
 *      - Youtube
 *      - Twitch
 *      - Noonoo
 *  - Dcinside
 *    - component가 다양할 필요없고 그냥
 *      url에 따라 다양한 기능 & 단축키들만 제공하면 됨.
 *      - 유동 관련 지원
 *      - 글 페이지 -> 댓글바로이동 기능/단축키 제공
 *      - 글 작성 -> Markdown기능/커서관리기능/자짤/제목글자수제한tooltip
 *      - 갤러리메인 -> 글삭/tweet처럼 빠른 글쓰기
 *  - ResolutionManager
 *    + Youtube
 *    + Twitch
 */

/**
 * @TODO
 * 애초에 웹에서 들어가기 전에
 * 영상 카드뷰에서 필터링이 필요하지 않나?
 *
 * 1. [DB] <--> Extension
 * 2. Desktop + Android
 *
 * Desktop:
 * 백그라운드에 돌리면서 ec2에서 get을 해오고
 * notification을 하는 역할
 *
 * Extension:
 * 내가 다운받은 목록을 sqlite에 저장해두고
 * 있는 것들은 전부 필터링해서 안보이게!
 * (중복저장구분이 너무 힘들다)
 *
 * Desktop은 현재 Extension을 완벽하게 대체할 수 있다.
 * 추가적으로 android 앱까지 받쳐주면 커버리지가 정말 높아질 거다.
 * 다만 개발기간이 보장이 안돼있으니까 임시방편으로 Extension을 먼저하는것.
 */

/**
 * @TODO
 * sqlite가 그때 안됐었는데 괜찮은 걸까?
 * 또 안되면 그냥 txt로 해야 되는 건가?
 */
