import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services';

const useProfile = () => {
  const { data: userProfile, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: () => getProfile().then((res) => res.data),
  });

  return { userProfile, isLoading };
};

export default useProfile;
