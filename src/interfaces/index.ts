export enum TabEnum {
  CAST = "cast",
  REVIEW = "review",
}

export interface ActorInterface {
  name: string;
  age: string;
  profession: string;
  img: string;
  id: string;
}

export interface SeriesSummaryInterface {
  title: string;
  ott: string;
  img: string;
  desc: string;
}

export interface SeriesInterface {
  series: SeriesSummaryInterface;
  characters: ActorInterface[];
}

export interface FeaturedReview {
  id: number;
  rating: number;
  content: string;
  author: string;
  avatarSrc: string;
}

export interface ReviewInterface {
  average: number;
  totalCount: number;
  counts: {
    rating: number;
    count: number;
  }[];
  featured: FeaturedReview[];
}
