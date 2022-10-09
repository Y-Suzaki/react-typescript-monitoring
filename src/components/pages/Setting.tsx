import { FC, memo } from 'react';
import { Header } from '../organisms/Header';

// 無名関数だとLinterで指摘される。
export const Setting: FC = memo(function Setting() {
  return (
    <>
      <Header />
      <p>Settingページ</p>;
    </>
  );
});
