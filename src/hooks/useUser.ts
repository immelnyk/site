import { useSession } from 'next-auth/react';

const useUser = () => {
  const session = useSession();

  if (!session.data) {
    return null;
  }

  return session.data.user;
};

export default useUser;
