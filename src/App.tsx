import React, { useState } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import { useUsers } from './hooks/useUsers';

function App() {
  const { getUsers, userProfiles, isLoading, isError } = useUsers();

  const onClick = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClick}>取得</button>
      {isError ? (
        <p>データの取得に失敗しました。</p>
      ) : isLoading ? (
        <p>読み取り中....</p>
      ) : (
        <>
          {userProfiles.map((userProfile) => (
            <UserCard key={userProfile.id} user={userProfile} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
