import { useCallback, useState } from 'react';
import axios from 'axios';
import { User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback((userId: string) => {
    setLoading(true);
    console.log(userId);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: 'Succeed to login.', status: 'info' });
          navigate('/home');
        } else {
          showMessage({ title: "Can't find user id.", status: 'error' });
        }
      })
      .catch((e) => {
        console.log(e);
        showMessage({ title: "Can't login because of unexpected error.", status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
