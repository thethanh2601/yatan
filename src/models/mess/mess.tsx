export interface Message {
  id: string;
  avatar: string;
  name: string;
  textBy: string;
  status: boolean;
  inbox: Inbox[];
}
export interface Inbox {
  id: string;
  text: string;
  role: number; // 0 cho nam, 1 cho nữ
  avatarUrl?: string; // URL avatar
}
