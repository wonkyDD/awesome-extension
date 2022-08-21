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
