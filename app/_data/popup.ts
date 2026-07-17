export interface PopupItem {
  id: string;
  image: string;
  alt: string;
  link: string;
  enabled: boolean;
}

export const popups: PopupItem[] = [
  {
    id: "spring-eye-promotion",
    image: "/clients/note-clinic/images/event/spring-eye-promotion.jpg",
    alt: "봄맞이 눈성형 상담 프로모션",
    link: "/event",
    enabled: true,
  },
  {
    id: "first-visit-event",
    image: "/clients/note-clinic/images/event/first-visit-event.jpg",
    alt: "신규 회원 전용 첫 상담 이벤트",
    link: "/event",
    enabled: true,
  },
];
