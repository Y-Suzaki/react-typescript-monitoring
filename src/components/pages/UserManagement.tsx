import { FC, memo } from 'react';
import { Header } from '../organisms/Header';

// 無名関数だとLinterで指摘される。
export const UserManagement: FC = memo(function UserManagement() {
  return (
    <>
      <Header />
      <p>UserManagementページ</p>;
    </>
  );
});
