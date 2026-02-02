import api from '@/services/api';

export interface ProfileResponse {
  success: Boolean;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar: string;
    latitude: number;
    longitude: number;
    createdAt: string;
  };
}

export const getProfile = async (): Promise<ProfileResponse> => {
  const res = await api.get('/api/auth/profile');
  return res.data;
};
