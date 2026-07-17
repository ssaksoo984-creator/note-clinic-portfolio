export interface SideIconItem {
  id: "kakao" | "call";
  label: string;
  href: string;
}

export const sideIcons: SideIconItem[] = [
  { id: "kakao", label: "카톡 상담", href: "https://pf.kakao.com/" },
  { id: "call", label: "전화 상담", href: "tel:02-0000-0000" },
];
