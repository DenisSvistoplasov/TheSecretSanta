import type { FC, ReactNode } from 'react';
import './paper.css';

export const Paper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={'paper ' + (className || '')}>
      <div className="paper__inner">{children}</div>
    </div>
  );
};
