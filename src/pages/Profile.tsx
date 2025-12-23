import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Profile: FC = () => {
  return (
    <div>
      <p>Profile</p>
      <Link to="/home">to home</Link>
    </div>
  );
};
