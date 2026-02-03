import api from '@/services/api';
import { loginPayload, loginResponse } from '../types';

export const signIn = async (data: loginPayload): Promise<loginResponse> => {
  const res = await api.post('/api/auth/login', data);
  return res.data;
};
