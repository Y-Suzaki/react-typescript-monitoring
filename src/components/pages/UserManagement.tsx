import { FC, memo } from 'react';

// 無名関数だとLinterで指摘される。
export const UserManagement: FC = memo(function UserManagement() {
  return <p>UserManagementページ</p>;
});
