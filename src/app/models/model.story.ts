
export class Story {
  id: string;
  threadId: string;
  title: string;
  content: string;
  author: any;
  audience: Array<any>;
  received: boolean;
  hidden: boolean;
  read: boolean;
  comments: Array<any>;
}