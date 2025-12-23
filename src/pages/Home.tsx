import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  return <div>
    <p>Home</p>
    <Link to='/profile'>to profile</Link>
  </div>;
};
