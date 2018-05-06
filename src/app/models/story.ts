
export interface Story {
  messageId: string;
  threadId: string;
  title: string;
  summary: string;
  content: Array<any>;
  // contentType: string;
  author: any;
  audience: Array<any>;
  received: boolean;
  hidden: boolean;
  read: boolean;
  comments: Array<any>;
}