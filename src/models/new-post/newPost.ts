export interface IComment {
  id: string;
  name: string;
  avata: string;
  title: string;
}
export interface Item {
  id: string;
  name: string;
  nickname?: string;
  avata: string;
  date: string;
  title: string;
  follow: boolean;
  image: string[];
  like: number;
  comment: IComment[];
  numFollowers?: number;
  biography?: string;
}
