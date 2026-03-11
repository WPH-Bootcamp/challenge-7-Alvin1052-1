import {
  TPostReviewPayload,
  TResGetMyReview,
  TResPostReview,
} from '@/types/review-type';
import api from './api';

export const PostReview = async (
  data: TPostReviewPayload
): Promise<TResPostReview> => {
  const res = await api.post('/api/review', data);
  return res.data;
};

export const GetMyReview = async (): Promise<TResGetMyReview> => {
  const res = await api.get('/api/review/my-review');
  return res.data;
};

interface TParams {
  page: number;
  limit: number;
}

export const GetReviewByRestoId = async (
  restoId: string,
  Params?: TParams
): Promise<TResGetMyReview> => {
  const res = await api.get(`/api/review/restaurant/${restoId}`, {
    params: Params,
  });
  return res.data;
};
