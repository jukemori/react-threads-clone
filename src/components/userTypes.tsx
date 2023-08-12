// Define the Follower interface
export interface Follower {
  user_uuid: string;
}

// Define the User interface
export interface User {
  id: number;
  user_uuid: string;
  username: string;
  handle: string;
  bio: string;
  link: string;
  img: string;
  instagram_url: string;
  followers: Follower[];
}
