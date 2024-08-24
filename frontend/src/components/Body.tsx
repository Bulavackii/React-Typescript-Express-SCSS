// body.tsx

import React from 'react';
import './Body.scss';

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="body">{children}</main>;
};

export default Body;
