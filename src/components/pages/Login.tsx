import { FC, memo } from 'react';

// 無名関数だとLinterで指摘される。
export const Login: FC = memo(function Login() {
  return <p>ログインページ</p>;
});
