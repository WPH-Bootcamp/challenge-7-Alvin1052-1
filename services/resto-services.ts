import {
  filterPayload,
  TBestSellerFilter,
  TGetBestSellerRestoResponse,
  TGetRecommendRestoResponse,
  TGetRestaurantResponse,
  TGetRestoByIdResponse,
  TGetRestoByNamePayload,
  TGetRestoByNameResponse,
} from '@/types/resto-type';
import api from './api';

export const getRestaurant = async (
  filter?: Partial<filterPayload>
): Promise<TGetRestaurantResponse> => {
  const params = {
    range: filter?.range ?? [],
    priceMin: filter?.priceMin ?? null,
    priceMax: filter?.priceMax ?? null,
    rating: filter?.rating ?? [],
    location: filter?.location ?? null,
    category: filter?.category ?? null,
    page: filter?.page ?? 1,
    limit: filter?.limit ?? 50,
  };

  const res = await api.get(`/api/resto`, { params: params });
  return res.data;
};

export const getRecommendResto =
  async (): Promise<TGetRecommendRestoResponse> => {
    const res = await api.get('/api/resto/recommended');
    return res.data;
  };

export const getBestSellerResto = async (
  filter?: TBestSellerFilter
): Promise<TGetBestSellerRestoResponse> => {
  const res = await api.get('/api/resto/best-seller', { params: filter });
  return res.data;
};

export const getRestoByName = async (
  payload: TGetRestoByNamePayload
): Promise<TGetRestoByNameResponse> => {
  const res = await api.get(`/api/resto/search`, { params: payload });
  return res.data;
};

export const getRestoById = async ({
  id,
  payload,
}: {
  id: string;
  payload?: TGetRestoByNamePayload;
}): Promise<TGetRestoByIdResponse> => {
  const res = await api.get(`/api/resto/${id}`, { params: payload });
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get('/api/auth/profile');
  return res.data;
};

export const getCart = async () => {
  const res = await api.get('/api/cart');
  return res.data;
};

export const postToCart = async ({
  restaurantId,
  menuId,
  quantity,
}: {
  restaurantId: number;
  menuId: number;
  quantity: number;
}) => {
  const res = await api.post('/api/cart', { restaurantId, menuId, quantity });
  return res.data;
};
