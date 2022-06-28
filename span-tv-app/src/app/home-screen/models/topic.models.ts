declare module TopicObjectResponse {

  export interface Links {
    self: string;
    html: string;
    photos: string;
  }

  export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }

  export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
  }

  export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
  }

  export interface Owner {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
  }

  export interface Links3 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }

  export interface ProfileImage2 {
    small: string;
    medium: string;
    large: string;
  }

  export interface Social2 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
  }

  export interface TopContributor {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links3;
    profile_image: ProfileImage2;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
  }

  export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: {url:string};
    thumb: string;
    small_s3: string;
  }

  export interface Links4 {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }

  export interface CurrentEvents {
    status: string;
    approved_on: Date;
  }

  export interface TopicSubmissions {
    currentevents: CurrentEvents;
  }

  export interface Links5 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }

  export interface ProfileImage3 {
    small: string;
    medium: string;
    large: string;
  }

  export interface Social3 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
  }

  export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links5;
    profile_image: ProfileImage3;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social3;
  }

  export interface CoverPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description?: any;
    urls: Urls;
    links: Links4;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions;
    user: User;
  }

  export interface Urls2 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  }

  export interface PreviewPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    blur_hash: string;
    urls: Urls2;
  }

  export interface RootObject {
    id: string;
    slug: string;
    title: string;
    description: string;
    query:string;
    published_at: Date;
    updated_at: Date;
    starts_at: Date;
    ends_at?: any;
    only_submissions_after?: any;
    visibility: string;
    featured: boolean;
    total_photos: number;
    current_user_contributions: any[];
    total_current_user_submissions?: any;
    links: Links;
    status: string;
    owners: Owner[];
    top_contributors: TopContributor[];
    cover_photo: CoverPhoto;
    preview_photos: PreviewPhoto[];
  }

}

