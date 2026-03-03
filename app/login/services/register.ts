import api from '@/services/api';
import { registerPayload, RegisterResponse } from '../types';

export const signUp = async (
  data: Omit<registerPayload, 'confirmPassword'>
): Promise<RegisterResponse> => {
  const res = await api.post('/api/auth/register', data);
  return res.data;
};
