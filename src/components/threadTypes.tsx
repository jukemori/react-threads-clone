interface Like {
  user_uuid: string;
}

export interface ThreadType {
  id: number;
  timestamp: string;
  thread_from: string;
  thread_to: string;
  reply_to: string;
  text: string;
  likes: Like[];
}
