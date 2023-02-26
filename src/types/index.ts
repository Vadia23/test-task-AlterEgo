export interface IFeaturedPostProps {
  post: IFeaturedPost;
}

export interface IMainFeaturedPostProps {
  post: IFeaturedPost;
}

export interface IFeaturedPost {
  title: string;
  description: string;
  image: string;
  imageText?: string;
  date?: string;
  imageLabel?: string;
}

export interface IPostsState {
  mainFeaturedPost: IFeaturedPost;
  featuredPosts: IFeaturedPost[];
}

export interface INewsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IProfileState {
  username: string;
  password: string;
  isLogin: any;
}

export interface IRequestProps {
  url: any;
  headers?:
    | {
        "Content-Type": string;
      }
    | undefined;
  method?: string;
  body?: any;
}

export interface INewsCardProps {
  id: number;
  title: string;
  body: string;
}
