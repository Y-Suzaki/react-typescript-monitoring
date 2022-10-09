import { FC, memo } from 'react';

// 無名関数だとLinterで指摘される。
export const Setting: FC = memo(function Setting() {
  return <p>Settingページ</p>;
});
