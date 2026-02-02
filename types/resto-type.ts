export type filterPayload = filter;

export type TResponseBase<T> = {
  success: boolean;
  message: string;
  data: T;
};

interface TPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface filter {
  range: number | null;
  priceMin: number | null;
  priceMax: number | null;
  rating: number | null;
  location: string | null;
  category: string | null;
  page: number | null;
  limit: number | null;
}

interface TRestaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange: TPriceRange;
  distance: number;
}

interface TPriceRange {
  min: number;
  max: number;
}
export type TRestoGetRestaurant = Omit<TRestaurant, 'distance'>;

interface TGetRestaurant {
  restaurants: TRestoGetRestaurant[];
  pagination: TPagination;
  filters: filter;
}

export type TGetRestaurantResponse = TResponseBase<TGetRestaurant>;

export type TRestoRecommendResto = Omit<
  TRestaurant,
  'priceRange' | 'menuCount' | 'distance'
> & {
  isFrequentlyOrdered: boolean;
  sampleMenus: TSampeMenus[];
} & TCoordinate;

interface TCoordinate {
  lat: number;
  long: number;
}

interface TSampeMenus {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export type TGetRecommendRestoResponse = TResponseBase<{
  recommendations: TRestoRecommendResto[];
  message: string;
}>;

export type TBestSellerFilter = Omit<filter, 'page' | 'limit'>;

export type TRestoBestSellerResto = Omit<TRestaurant, 'category'>;

export type TGetBestSellerResto = {
  restaurants: TRestoBestSellerResto[];
  pagination: TPagination;
};

export type TGetBestSellerRestoResponse = Omit<
  TResponseBase<TGetBestSellerResto>,
  'message'
>;

export type TGetRestoByNamePayload = Pick<filter, 'page' | 'limit'> & {
  q: string;
};

export type TRestoGetRestoByName = Omit<TRestaurant, 'category'>;

export type TGetRestoByName = {
  restaurants: TRestoGetRestoByName[];
  pagination: TPagination;
  searchQuery: string;
};

export type TGetRestoByNameResponse = Omit<
  TResponseBase<TGetRestoByName>,
  'message'
>;

export type TGetRestoByIdPayload = Omit<filter, 'page' | 'limit'>;

export type TRestoGetRestoById = Omit<
  TRestaurant,
  'reviewCount' | 'menuCount' | 'priceRange'
> & {
  averageRating: number;
  coordinates: TCoordinate;
  totalMenus: number;
  totalReviews: number;
  menus: TMenu[];
  reviews: TReview[];
};

export type TGetRestoByIdResponse = Omit<
  TResponseBase<TRestoGetRestoById>,
  'message'
>;

interface TReview {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: TReviewUser;
}

interface TReviewUser {
  id: number;
  name: string;
  avatar: string;
}

export interface TMenu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}
