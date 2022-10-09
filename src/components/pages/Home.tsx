import { FC, memo } from 'react';

// 無名関数だとLinterで指摘される。
export const Home: FC = memo(function Home() {
  return <p>Homeページ</p>;
});
