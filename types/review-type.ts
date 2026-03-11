import { TResponseBase } from './resto-type';

export interface TPostReviewPayload {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
  menuIds: number[];
}

type TReviewUser = {
  id: number;
  name: string;
  avatar?: string;
};
type TReviewResto = {
  id: number;
  name: string;
  logo?: string;
};
type TReviewMenu = {
  menuId: number;
  menuName: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
};

export type TReviewData = {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user?: TReviewUser;
  restaurant: TReviewResto;
  menus: TReviewMenu[];
};

type TresPostReviewData = {
  review: TReviewData;
};

export type TResPostReview = TResponseBase<TresPostReviewData>;

type TReviewPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
type TGetMyReviewData = {
  reviews: TReviewData[];
  pagination: TReviewPagination;
};

export type TResGetMyReview = TResponseBase<TGetMyReviewData>;

type TGetReviewByRestoIdReview = Omit<TReviewData, 'restaurant'>;

type TGetReviewByRestoIdData = {
  reviews: TGetReviewByRestoIdReview[];
  pagination: TReviewPagination;
};

export type TResGetReviewByRestoId = TResponseBase<TGetReviewByRestoIdData>;
